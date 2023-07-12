import { Link } from "react-router-dom";
import Records from "../../data/records.json";
import "./lastRecordsPublished.css";

function lastRecordsPublished() {

    const lastRecords = Records.slice(0,3);

    return (
        <div className="last-records-component-block">
            <h2>Les derniers dossiers</h2>
            {lastRecords.map((record, index) => (
                <Link key={record.id} to={`/dossier/${record.id}`}>
                    <div className="record">
                        <div className="record-title"><h3>{record.title}</h3 ></div>
                        <div className="record-author"> Par: <span className="author-name">{record.author}</span></div>
                    </div>
                </Link>
            ))}
            <div className="more-records"><Link to="/dossiers">Voir tous les dossiers</Link></div>
        </div>
    )
}

export default lastRecordsPublished