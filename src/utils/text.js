export const handleTags = (tagString) => {
console.log('tagString in:', tagString);

    const returnedTagString = tagString.split(",")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
    console.log('returnedTagString :', returnedTagString);
    return returnedTagString
}