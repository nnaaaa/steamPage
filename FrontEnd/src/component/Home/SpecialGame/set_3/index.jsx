const grid = {
  height: `100%`,
  display: `grid`,
  gridTemplateAreas: `'one two three' 'one two four'`,
  columnGap: `2%`,
  rowGap: `4%`,
}

const readnumber = (numb) => {
  switch (numb) {
    case 1:
      return `one`;
      break;
    case 2:
      return `two`;
      break;
    case 3:
      return `three`;
      break;
    case 4:
      return `four`;
      break;
  }
}

export default function SetGameOne({ url,currentIndex,stateIndex }) {
  return (
    <div 
      style={grid} 
      className={`special-game__items ${currentIndex === stateIndex ? `active` : ``}`}
    >
      {url?.map((image, index) =>
        <div
          style={{
            height: `100%`,
            backgroundImage: `url(${image})`,
            backgroundPosition: `center center`,
            backgroundSize: `cover`,
            gridArea: readnumber(index),
            boxShadow:`0 0 7px rgba(0,0,0,0.6)`
          }}
        />
      )}
    </div>
  )
}