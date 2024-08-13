const [clickedIndexes, setClickedIndexes] = useState([]);

export const handleHeartClick = (index) => {
    if (clickedIndexes.includes(index)) {
        setClickedIndexes(clickedIndexes.filter((i) => i !== index));
    } else {
        setClickedIndexes([...clickedIndexes, index]);
    }
};


