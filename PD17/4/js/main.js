function colorParagraphs(color) {
    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach(function (paragraph) {
        paragraph.style.color = color;
    })

}

colorParagraphs('red');