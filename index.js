TweenMax.from('.content', 2, {
    delay: 1,
    opacity: 0,
    ease: Expo.easeInOut
  })

  TweenMax.from('nav', 2, {
    delay: .1,
    opacity: 0,
    ease: Expo.easeInOut
  })

  TweenMax.from('.video', 2, {
    delay: .8,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut
  })

  TweenMax.from('.footer', 2, {
    delay: 1.5,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
  })