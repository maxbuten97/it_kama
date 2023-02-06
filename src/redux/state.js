let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 15 },
      { id: 2, message: "Its my first post", likesCount: 20 },
      { id: 2, message: "blabla", likesCount: 11 },
      { id: 2, message: "Dada", likesCount: 220 },
    ],
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Victor" },
      { id: 6, name: "Valera" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How is your it-kamasutra" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Yo" },
      { id: 5, message: "Yo" },
    ],
  },
  sidebar: {
    friends: [
      { id: 1, name: "Andre" },
      { id: 2, name: "Sasha" },
      { id: 3, name: "Sveta" },
    ],
  },
};

export default state;
