const textContainer = document.querySelectorAll(".word")
      
const defaultScale = 1;
const maxScale = 2;
const neighborScale = 1.5;

textContainer.forEach((textContainer) => {
  const spans = textContainer.querySelectorAll("span");

  textContainer.addEventListener("mousemove", (e) => {
    const target = e.target;
    const index = Array.from(spans).indexOf(target);

    spans.forEach((span, i) => {
      let scale = defaultScale;

      if(i === index) {
        scale = maxScale;
      } else if (i === index - 1 || i === index + 1) {
        scale = neighborScale;
      }

      span.style.transform = `scaleY(${scale})`;
    });


    })
    textContainer.addEventListener("mouseleave", () => {
        spans.forEach((span) => {
            span.style.transform = `scaleY(${defaultScale})`
        })
  })
})