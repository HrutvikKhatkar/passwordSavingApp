import './index.css'

const initialColors = ["#454f84", "#0b69ff", "#94a3b8", "#b6c3ca", "#7683cb", "#f59e0b", "#10b981", "#f97316", "#14b8a6", "#b91c1c"];

function getRandomColor() {
    return initialColors[Math.floor(Math.random() * initialColors.length)];
}
const Initial = ({initialLetter}) => {
    const randomColor = getRandomColor();
    const initialStyle = {
        backgroundColor: randomColor,
    };
    return <p className="initial" style={initialStyle}>{initialLetter}</p>
}

export default Initial