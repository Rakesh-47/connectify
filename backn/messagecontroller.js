import Conversation from "./models/conversation.js";
import Message from "./models/messagemodel.js";
import { getsocketid, io } from "./socket/socket.js";

export const sendmessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverid } = req.params;
        const senderid = req.user._id;

        let conv = await Conversation.findOne({
            participants: { $all: [senderid, receiverid] }
        });

        if (!conv) {
            conv = await Conversation.create({
                participants: [senderid, receiverid]
            });
        }

        const newmessage = new Message({
            senderid, receiverid, message
        });

        conv.messages.push(newmessage._id);

        await Promise.all([conv.save(), newmessage.save()]);

        const receiversocketid = getsocketid(receiverid);
        if (receiversocketid) {
            io.to(receiversocketid).emit("newmessage", newmessage);
        }

        res.status(201).json(newmessage);
    } catch (error) {
        console.log("Error in sending message: ", error);
        res.status(500).json({ error: "Error in sending message" });
    }
};

export const getmessage = async (req, res) => {
    try {
        const { id: chattinguser } = req.params;
        const senderid = req.user._id.toString();

        const conv = await Conversation.findOne({
            participants: { $all: [senderid, chattinguser] }
        }).populate("messages");

        if (!conv) return res.status(200).json([]);

        const messagebtw = conv.messages;
        res.status(200).json(messagebtw);
    } catch (error) {
        console.log("Error in getting messages: ", error);
        res.status(500).json({ error: "Error in getting messages" });
    }
};
