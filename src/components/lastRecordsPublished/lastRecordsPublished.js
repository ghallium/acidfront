import { Link } from "react-router-dom";
import Records from "../../data/records.json";
import "./lastRecordsPublished.css";

function lastRecordsPublished() {
    return (
        <div className="last-records-component-block">
            <h2>Les derniers dossiers</h2>
            {Records.map((record, index) => (
                <Link key={record.id} to={`/dossier/${record.id}`}>
                    <div className="record">
                        <div className="record-title"><h3>{record.title}</h3 ></div>
                        <div className="record-author"> Par: <span className="author-name">{record.author}</span></div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default lastRecordsPublished