import { PowerNukkitX, EventPriority } from ":powernukkitx"

export function main() {
    PowerNukkitX.listenEvent("cn.nukkit.event.player.PlayerChatEvent", EventPriority.NORMAL, event => {
        if (event.isCancelled()) {
            return;
        }
        if (event.getMessage().includes("fuck")) {
            event.setCancelled();
            event.getPlayer().sendMessage("禁止说脏话");
        }
    })
}

export function close() {
    
}
