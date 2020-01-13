import { ChatUserstate } from 'tmi.js';

import { isMod, isBroadcaster } from '@shared/common';

export const blogCommand = (
  message: string,
  user: ChatUserstate,
  twitchChatFunc: (message: string) => void
): boolean => {
  if (message === undefined || message.length === 0) {
    return false;
  }

  const lowerMessage = message.toLocaleLowerCase().trim();
  const firstWord = lowerMessage.split(' ')[0];

  if (firstWord !== '!blog' && firstWord !== '!website') {
    return false;
  }

  if (twitchChatFunc) {
    twitchChatFunc(
      `Mike's blog and our stream notes can be found at https://baldbeardedbuilder.com`
    );
    return true;
  }

  return false;
};

export const githubCommand = (
  message: string,
  user: ChatUserstate,
  twitchChatFunc: (message: string) => void
): boolean => {
  if (message === undefined || message.length === 0) {
    return false;
  }

  const lowerMessage = message.toLocaleLowerCase().trim();
  const firstWord = lowerMessage.split(' ')[0];

  if (firstWord !== '!github') {
    return false;
  }

  if (twitchChatFunc) {
    twitchChatFunc(
      `Mike's GitHub account can be found at https://github.com/michaeljolley`
    );
    return true;
  }

  return false;
};

export const twitterCommand = (
  message: string,
  user: ChatUserstate,
  twitchChatFunc: (message: string) => void
): boolean => {
  if (message === undefined || message.length === 0) {
    return false;
  }

  const lowerMessage = message.toLocaleLowerCase().trim();
  const firstWord = lowerMessage.split(' ')[0];

  if (firstWord !== '!twitter') {
    return false;
  }

  if (twitchChatFunc) {
    twitchChatFunc(
      `You can find Michael on Twitter at https://twitter.com/baldbeardbuild`
    );
    return true;
  }

  return false;
};

export const discordCommand = (
  message: string,
  user: ChatUserstate,
  twitchChatFunc: (message: string) => void
): boolean => {
  if (message === undefined || message.length === 0) {
    return false;
  }

  const lowerMessage = message.toLocaleLowerCase().trim();
  const firstWord = lowerMessage.split(' ')[0];

  if (firstWord !== '!discord') {
    return false;
  }

  if (twitchChatFunc) {
    twitchChatFunc(
      `You can join our discord using this link: https://discord.gg/XSG7HJm`
    );
    return true;
  }

  return false;
};

export const heroinesCommand = (
  message: string,
  user: ChatUserstate,
  twitchChatFunc: (message: string) => void
): boolean => {
  if (message === undefined || message.length === 0) {
    return false;
  }

  const lowerMessage = message.toLocaleLowerCase().trim();
  const firstWord = lowerMessage.split(' ')[0];

  if (firstWord !== '!heroines') {
    return false;
  }

  if (twitchChatFunc) {
    twitchChatFunc(
      `The Heroines of JavaScript cards are created by Vue Vixens and support their scholarship fund. Lauryn (13) & Layla (10) interview a new heroine every other Sunday.  Check our events to catch the next one.  You can learn more at https://github.com/mtheoryx/heroines-of-javascript and https://vuevixens.org`
    );
    return true;
  }

  return false;
};

export const shoutoutCommand = (
  message: string,
  user: ChatUserstate | undefined,
  twitchChatFunc: (message: string) => void
): boolean => {
  /*
   * 1. We have to have a message to parse in order to do a shout-out.
   * 2. Only mods & broadcasters can shout-out.  So we have to have the user object to
   *    evaluate whether they are a mod or broadcaster
   * 3. If user is undefined we've specifically called this method from the bot so we want
   *    to exit the if statement below and continue the !so.
   */
  if (
    message === undefined ||
    message.length === 0 ||
    (user && !isMod(user) && !isBroadcaster(user))
  ) {
    return false;
  }

  const lowerMessage = message.toLocaleLowerCase().trim();
  const splitMessage = lowerMessage.split(' ');

  if (splitMessage[0] !== '!so' || splitMessage.length < 2) {
    return false;
  }

  const username = splitMessage[1].replace('@', '');

  if (twitchChatFunc) {
    twitchChatFunc(
      `Shout out to @${username}!  Check out their stream at https://twitch.tv/${username} and give them a follow.`
    );
    return true;
  }

  return false;
};

export const helpCommand = (
  message: string,
  user: ChatUserstate,
  twitchChatFunc: (message: string) => void
): boolean => {
  if (message === undefined || message.length === 0) {
    return false;
  }

  const lowerMessage = message.toLocaleLowerCase().trim();
  const firstWord = lowerMessage.split(' ')[0];

  if (firstWord !== '!help' && firstWord !== '!commands') {
    return false;
  }

  if (twitchChatFunc) {
    twitchChatFunc(
      `I can respond to the following commands: !attention, !avatar {character}, !awesum, !awesumRepo, !blog, !candle, !derp, !discord, !font, !github, !giving, !heroines, !hype, !keyboard, !mark, !mod, !profile {github/twitter} {handle}, !project, !raid, !sfx, !so {user name}, !team, !theme, !twitter, !website, !youtube`
    );
    return true;
  }

  return false;
};

export const modCommand = (
  message: string,
  user: ChatUserstate,
  twitchChatFunc: (message: string) => void
): boolean => {
  if (message === undefined || message.length === 0) {
    return false;
  }

  const lowerMessage = message.toLocaleLowerCase().trim();
  const firstWord = lowerMessage.split(' ')[0];

  if (firstWord !== '!mod') {
    return false;
  }

  if (twitchChatFunc) {
    twitchChatFunc(
      `Moderators can use the following commands: !note {username} {what they taught us}`
    );
    return true;
  }

  return false;
};

export const youTubeCommand = (
  message: string,
  user: ChatUserstate,
  twitchChatFunc: (message: string) => void
): boolean => {
  if (message === undefined || message.length === 0) {
    return false;
  }

  const lowerMessage = message.toLocaleLowerCase().trim();
  const firstWord = lowerMessage.split(' ')[0];

  if (firstWord !== '!youtube') {
    return false;
  }

  if (twitchChatFunc) {
    twitchChatFunc(
      `You can catch all our streams on YouTube at https://www.youtube.com/channel/UCn2FoDbv_veJB_UbrF93_jw`
    );
    return true;
  }

  return false;
};

export const liveCodersCommand = (
  message: string,
  user: ChatUserstate,
  twitchChatFunc: (message: string) => void
): boolean => {
  if (message === undefined || message.length === 0) {
    return false;
  }

  const lowerMessage = message.toLocaleLowerCase().trim();
  const firstWord = lowerMessage.split(' ')[0];

  if (firstWord !== '!team') {
    return false;
  }

  if (twitchChatFunc) {
    twitchChatFunc(
      `Check out the entire Live Coders team and give them all a follow at https://livecoders.dev`
    );
    return true;
  }

  return false;
};

export const fontCommand = (
  message: string,
  user: ChatUserstate,
  twitchChatFunc: (message: string) => void
): boolean => {
  if (message === undefined || message.length === 0) {
    return false;
  }

  const lowerMessage = message.toLocaleLowerCase().trim();
  const firstWord = lowerMessage.split(' ')[0];

  if (firstWord !== '!font') {
    return false;
  }

  if (twitchChatFunc) {
    twitchChatFunc(
      `Mike is using the Fira Code font.  You can find it at https://github.com/tonsky/FiraCode`
    );
    return true;
  }

  return false;
};

export const awesumRepoCommand = (
  message: string,
  user: ChatUserstate,
  twitchChatFunc: (message: string) => void
): boolean => {
  if (message === undefined || message.length === 0) {
    return false;
  }

  const lowerMessage = message.toLocaleLowerCase().trim();
  const firstWord = lowerMessage.split(' ')[0];

  if (firstWord !== '!awesumrepo') {
    return false;
  }

  if (twitchChatFunc) {
    twitchChatFunc(
      `The Awesum.io repository can be found at https://github.com/MichaelJolley/awesum.io`
    );
    return true;
  }

  return false;
};

export const keyboardCommand = (
  message: string,
  user: ChatUserstate,
  twitchChatFunc: (message: string) => void
): boolean => {
  if (message === undefined || message.length === 0) {
    return false;
  }

  const lowerMessage = message.toLocaleLowerCase().trim();
  const firstWord = lowerMessage.split(' ')[0];

  if (firstWord !== '!keyboard') {
    return false;
  }

  if (twitchChatFunc) {
    twitchChatFunc(
      `Mike is using the MassDrop ALT mechanical keyboard.  You can find it at https://drop.com/buy/massdrop-alt-mechanical-keyboard`
    );
    return true;
  }

  return false;
};

export const awesumCommand = (
  message: string,
  user: ChatUserstate,
  twitchChatFunc: (message: string) => void
): boolean => {
  if (message === undefined || message.length === 0) {
    return false;
  }

  const lowerMessage = message.toLocaleLowerCase().trim();
  const firstWord = lowerMessage.split(' ')[0];

  if (firstWord !== '!awesum') {
    return false;
  }

  if (twitchChatFunc) {
    twitchChatFunc(
      `The Awesum.io project is a new way to spread the love and thank those who may have helped you - help brighten up their day by acknowledging how they've helped you. There is a short video introduction which can be found at https://www.twitch.tv/videos/523855530`
    );
    return true;
  }

  return false;
};

export const raidCommand = (
  message: string,
  user: ChatUserstate,
  twitchChatFunc: (message: string) => void
): boolean => {
  if (message === undefined || message.length === 0) {
    return false;
  }

  const lowerMessage = message.toLocaleLowerCase().trim();
  const firstWord = lowerMessage.split(' ')[0];

  if (firstWord !== '!raid') {
    return false;
  }

  if (twitchChatFunc) {
    twitchChatFunc(
      `baldbeRaid baldbeRaid baldbeRaid baldbeRaid baldbeRaid baldbeRaid baldbeRaid baldbeRaid baldbeRaid baldbeRaid baldbeRaid baldbeRaid`
    );
    return true;
  }

  return false;
};

export const hypeCommand = (
  message: string,
  user: ChatUserstate,
  twitchChatFunc: (message: string) => void
): boolean => {
  if (message === undefined || message.length === 0) {
    return false;
  }

  const lowerMessage = message.toLocaleLowerCase().trim();
  const firstWord = lowerMessage.split(' ')[0];

  if (firstWord !== '!raid') {
    return false;
  }

  if (twitchChatFunc) {
    twitchChatFunc(
      `baldbeHype baldbeHype baldbeHype baldbeHype baldbeHype baldbeHype baldbeHype baldbeHype baldbeHype baldbeHype baldbeHype baldbeHype`
    );
    return true;
  }

  return false;
};

export const derpCommand = (
  message: string,
  user: ChatUserstate,
  twitchChatFunc: (message: string) => void
): boolean => {
  if (message === undefined || message.length === 0) {
    return false;
  }

  const lowerMessage = message.toLocaleLowerCase().trim();
  const firstWord = lowerMessage.split(' ')[0];

  if (firstWord !== '!raid') {
    return false;
  }

  if (twitchChatFunc) {
    twitchChatFunc(
      `baldbeDerp baldbeDerp baldbeDerp baldbeDerp baldbeDerp baldbeDerp baldbeDerp baldbeDerp baldbeDerp baldbeDerp baldbeDerp baldbeDerp`
    );
    return true;
  }

  return false;
};

export const givingCommand = (
  message: string,
  user: ChatUserstate,
  twitchChatFunc: (message: string) => void
): boolean => {
  if (message === undefined || message.length === 0) {
    return false;
  }

  const lowerMessage = message.toLocaleLowerCase().trim();
  const firstWord = lowerMessage.split(' ')[0];

  if (firstWord !== '!raid') {
    return false;
  }

  if (twitchChatFunc) {
    twitchChatFunc(
      `The Bald Bearded Builder is currently supporting Backpack Buddies, helping feed underprivileged children who don't know where their next meal comes from. More information about the charity can be found at http://stclairbuddies.org`
    );
    return true;
  }

  return false;
};
