import ColorBox from "./ColorBox";
import './BoxList.css'

export default function BoxList({ colors }) {
    const boxes = []
    let boxCnt = 25;
    for (let i = 0; i < boxCnt; i++) {
        boxes.push(<ColorBox colors={colors} />)
    }
    return (
        <div className="BoxList">
            {boxes}
        </div>
    )
}