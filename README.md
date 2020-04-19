# eris-additions
extend prototypes for eris

require("eris-additions")(eris, options)
eris: the object returned when requiring eris
options (object):
* enabled: array of `Object.Method` stating which prototypes to enable
* disabled: array of `Object.Method` stating which prototypes to disable

only takes either enabled or disabled, if both are provided, it uses disabled

Examples of adding `eris-additions` to your code:
```js
const Eris = require("eris");
require("eris-additions")(Eris, { disabled: ["Channel.sendMessage", "Channel.sendCode", "Eris.Embed"] })
```
or
```js
const Eris = require("eris-additions")(require("eris"))
```

Note: You only need to require eris-additions once, even if you require eris in more than one file.

## Channel Additions

* awaitMessages(filter, options) - wait for messages

Filter: function(message) which returns a true or false value

Options: `{
  maxMatches (required): number | amount of messages to collect,
  time: milliseconds | the time until the collector times out
}`

Returns: A promise that is resolved with an array of collected messages

Example (async):
```js
let responses = await message.channel.awaitMessages(m => m.content === "yes", { time: 10000, maxMatches: 1 });
if(responses.length) message.channel.createMessage("You said yes :)");
else message.channel.createMessage("You didn't say yes :(");
```

* createCode(code, language) / sendCode(code, language) - send a codeblock

Returns: A promise that is resolved with the sent message or rejected with the error

Same as Client.createCode, but no need for the channelID

Example:
```js
message.channel.createCode("console.log('hi')", "js");
```

* createEmbed(embed) / sendEmbed(embed) - send an embed

Returns: A promise that is resolved with the sent message or rejected with the error

Same as Client.createEmbed, but no need for the channelID

Example:
```js
message.channel.createEmbed({ title: "hello", description: "test embed" });
```

* sendMessage(content, file) - send a message

Returns: A promise that is resolved with the sent message or rejected with the error

Same as Eris' Channel.createMessage()

Example:
```js
message.channel.sendMessage("hi");
```

## Client Additions

* createCode(channelID, code, language) - send a code block

channelID: the id of the channel to send the message in

Code: the content to send inside the code block

Language (optional): the language of the code block

Returns: A promise that is resolved with the sent message or rejected with the error

Example:
```js
client.createCode(message.channel.id, "console.log('hi')", "js");
```

* createEmbed(channelID, embed) - sends an embed

channelID: the id of the channel to send the message in

embed: embed object

Returns: A promise that is resolved with the sent message or rejected with the error

Example:
```js
client.createEmbed(message.channel.id, { title: "hello", description: "test embed" });
```

## Eris Additions

* new Eris.CodeBlock(code, language) - create a codeblock

Methods:
* content(content) - set content
* language(lang) - set language

Example:
```js
message.member.createMessage("look at this cool code:" + new Eris.CodeBlock().content("console.log('hi')").language("js"));
```

* new Eris.Embed({ embed }) - create a embed

Methods:
* author(name, icon, url) - set embed author
* color(HEX color) - set embed color
* description(desc) - set embed description
* field(name, value, inline) - add embed field
* file(file) - set embed file
* footer(text, icon) - set embed footer
* image(url) - set embed image
* timestamp(date) - set embed date
* title(title) - set embed title
* thumbnail(url) - set embed thumbnail
* url(url) - set embed url

Example:
```js
message.channel.createEmbed(new Eris.Embed().title("hello").description("test embed"));
```

## GuildChannel Additions

* memberHasPermission(memberID, permission) - if a member has a permission in a channel

memberID: the id of the member or a member object

permission: string of Eris permission name

Returns: Boolean of whether or not the member has the permission

Example:
```js
if(message.channel.memberHasPermission(bot.user.id, "sendMessages")) message.channel.createMessage("Pong!");
else message.member.createMessage("I cannot send messages in that channel, please double check permissions");
```

## Member Additions

* bannable - if the member is bannable by the bot

Example:
```js
let memberToBan = message.guild.members.get(message.content);
if(memberToBan.bannable) {
  memberToBan.ban();
  message.channel.createMessage("I banned the member");
} else {
  message.channel.createMessage("I can't ban that member, please double check permissions");
}
```

* createMessage(content, file) - send the member a message

Returns: A promise that is resolved with the sent message or rejected with the error

Same as User.createMessage()

Example:
```js
message.member.createMessage("hi");
```

* effectiveName - the member's display name 

Example:
```js 
message.channel.createMessage(`Your effective name is: ${mesage.member.effectiveName}`);
```

* hasPermission(permission) - if the member has a permission in the guild

permission: string of Eris permission name

Returns: Boolean of whether or not the member has the permission

Example:
```js
if(message.member.hasPermission("banMembers")) message.channel.createMessage("You can ban members");
else message.member.createMessage("You can't ban members");
```

* hasRole(roleID) - if the member has a role

roleID: a role object or role ID

Returns: Boolean of whether or not the member has the role

Example:
```js
let mutedRole = message.guild.roles.find(role => role.name === "Muted");
if(message.member.hasRole(mutedRole)) message.channel.createMessage("You are muted");
else message.channel.createMessage("You are not muted");
```

* highestRole - the highest role a member has

Example:
```js
message.channel.createMessage(`Your highest role is: ${message.member.highestRole.name}`);
```

* color - the highest color a member has

Example:
```js
message.channel.createMessage(`Your color: ${message.member.color}`);
```

* kickable - if a member is kickable by the bot

Example:
```js
let memberToBan = message.guild.members.get(message.content);
if(memberToBan.kickable) {
  memberToBan.kick();
  message.channel.createMessage("I kicked the member");
} else {
  message.channel.createMessage("I can't kick that member, please double check permissions");
}
```

* punishable(member2) - logic behind kickable / bannable, may be useful for other things

member2: a member object

Returns: Boolean of whether or not member2 can punish the member

Example:
```js
let memberToWarn = message.guild.members.get(message.content);
if(memberToBan.punishable(message.member)) {
  warnings[memberToBan.id] += 1;
  message.channel.createMessage("The member has been warned");
} else {
  message.channel.createMessage("You dont have permission to warn that member");
}
```

* roleObjects - array of roles a member has, but mapped to their role objects, not their ids

Example:
```js
message.channel.createMessage("Your roles: " + message.member.roleObjects.map(role => role.name);
```

* sendMessage(content, file) - send the member a message

Returns: A promise that is resolved with the sent message or rejected with the error

Same as User.createMessage()

Example:
```js
message.member.sendMessage("hi");
```

## Message Additions

* guild - guild of the message

Example:
```js
message.channel.createMessage(`You are talking in ${message.guild.name}`);
```

## Role Additions

* addable - if the bot can add the role to a member

Example:
```js
if(!role.addable) message.channel.createMessage("I don't have permission to add that role to anyone, is it's position higher than mine?");
```

* higherThan(role2) - check if the role's position is higher than a different role's position

role2: role object

Returns: Boolean of whether or not the role is higher than role2's position

Example:
```js
if(member.highestRole.higherThan(otherMember.highestRole)) channel.createMessage("You have a higher role than " + otherMember.user.username);
```

## User Additions

* createMessage(content, file) / sendMessage(content, file) - send the user a direct message

Returns: A promise resolved with the sent message or rejected with the error of sending the message or getting the DM channel

Same as Eris' Channel.createMessage but called on a DM channel for you

Example:
```js
message.author.createMessage("Hello!");
```

## Guild Additions 

* findMembers(query) - get a list of members who match the query

query: a String that you wish to lookup against a guild's members.

Returns: a Collection<Member> of members that match the query.

Example:
```js
const members = message.guild.findMembers("Attribute");
message.channel.createMessage(`There are ${members.length} members that match the query `Attribute`: ${members.map(m => m.effectiveName).join(", ")}`);
```

* me - return the Member object of the bot in this guild.

Example:
```js
message.channel.createMessage(`My highest role is: ${message.guild.me.highestRole.name}!`);
```
