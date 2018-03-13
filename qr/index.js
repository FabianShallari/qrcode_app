const recognizedQrCodes = {
  dogs: {
    topText: 'Hug me, cuddle me',
    imageUri: 'https://i.imgur.com/YikCID7.jpg',
    bottomText: "C'mon, I'm your friend, your best friend"
  },
  cats: {
    topText: "Gimme Food HOOMAN!!! NOW",
    imageUri: 'https://i.imgur.com/wYTCtRu.jpg',
    bottomText: 'What are you still staring at?????'
  }
}

const fallbackParams = {
  topText: "Well, that didn't go as planned now, did it?",
  imageUri: 'https://i.imgur.com/vkvrmWO.png',
  bottomText: "Can't trick the master trickster!!!"
}

export default resolveParamsForQrCode = (qrText) => {
  return Object.keys(recognizedQrCodes).includes(qrText) ? recognizedQrCodes[qrText] : fallbackParams;
}