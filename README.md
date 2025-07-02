# Web Development Project 4 - *Veni Vici*

Submitted by: **Vikram Singh**

This web app: **is a random cat discovery tool that lets users explore cat breeds one by one. Users can click a breed name to ban it from future results, building a personalized discovery experience.**

Time spent: **[fill in your estimated hours]**

---

## ✅ Required Features

The following **required** functionality is completed:

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - Consistent attributes: breed name, origin, and temperament
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - Single result displayed at a time
  - Attributes match the displayed image
- [x] **API call response results appear random to the user**
  - Discover button returns random new cat breeds with minimal repeats
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - Breed name is clickable
  - Clicking adds it to ban list
  - Clicking a ban list item removes it immediately
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - App filters out banned breed names before displaying

---

## 🌟 Optional Features

The following **optional** features are implemented:

- [ ] Multiple types of attributes are clickable and can be added to the ban list
- [ ] Users can see a stored history of previously displayed results

---

## ✨ Additional Features

- [ ] N/A — no additional features beyond core requirements yet

---

## 🎥 Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://i.imgur.com/cCGhegN.gif' title='Video Walkthrough' alt='Video Walkthrough' />

GIF created with **[e.g. Kap or ScreenToGif]**

---

## 📝 Notes

- At first, the API sometimes returned cats without breed data, so I had to implement a retry loop to only show results with breed info.
- I used a simple in-memory ban list to filter out unwanted breeds.

---

## 📄 License