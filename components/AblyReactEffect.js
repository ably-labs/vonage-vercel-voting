import { useChannel } from 'ably/react'
import { useState } from 'react'

export function readLastAblyMessage(channelName, callbackOnMessage, rewind = false) {

    const rewindParam = "[?rewind=1]";
    const getChannel = rewind ? rewindParam + channelName : channelName;

    const [synced, setSynced] = useState(false);
    
    const { channel } = useChannel(getChannel, async (message) => {
    
         if (!synced) {
            setSynced(true);
            await callbackOnMessage(message);
        }
    }, true);
    
    return channel;
}