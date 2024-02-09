const fs = require("fs");
const { Client, Intents } = require("discord.js");


const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
    console.log("Bot is ready!");

    const avatarPath = './teste/R.gif'; // Caminho para o arquivo de avatar GIF
    const avatarData = fs.readFileSync(avatarPath);
    const avatar = Buffer.from(avatarData);

    client.user.setAvatar(avatar)
        .then(() => console.log("Avatar set!"))
        .catch(error => console.error("Error setting avatar:", error));
});

client.login('TOKEN_AQUI');
