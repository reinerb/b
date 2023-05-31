---
title: Astrologian Card Game
excerpt: An interactive tool to teach a game mechanic.
img: /images/ast-cards.jpg
imgPlaceholder: A screenshot of the game interface.
liveSite: https://reinerb.github.io/astrologian-cards/
github: https://github.com/reinerb/astrologian-cards
tags:
  - React
  - CSS
---

I designed a simple game to teach a friend how to better play the Astrologian job in Final Fantasy XIV.

In FFXIV, the [Astrologian class](https://na.finalfantasyxiv.com/jobguide/astrologian/) enhances party members by using cards on them. The effect is improved if the cards are played on characters with the correct role.

The app presents a card and a four- or eight-member party. When you click on a party member, the app checks whether the current card is correct for their role with the following criteria:

- The Balance, the Arrow, and the Spear: Melee damage dealers (Monk, Lancer, Ninja, Samurai, Reaper) or tanks if there are none (Paladin, Warrior, Dark Knight, Gunbreaker)
- The Bole, the Ewer, and the Spire: Ranged and magical damage dealers (Bard, Machinist, Dancer, Black Mage, Summoner, Red Mage) or healers if there are none (White Mage, Scholar, Astrologian, Sage)

The app will highlight your answer in green or red based on whether it’s correct and will highlight all other correct answers in blue.

At the request of another friend, I added a timer to track how long your guesses take, and a tracker for your average guess time. The timer turns red after

## Technologies Used

- React
- CSS

## Things I learned

- This project gave me an excellent grip on using state for tracking information. There are a lot of things to track in this app, so having good state management is incredibly important.
- To create a timer, you can use setInterval to update a time variable in state after an incredibly short interval. In this case, I set it to update every 10ms.
