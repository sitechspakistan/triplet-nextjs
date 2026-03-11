export default function LoadingBar({ progress }) {
    return (
        <div className="loading-wrapper">
            <span>{progress}%</span>
            <hr
                className="loading-bar"
                style={{ "--progress": `${progress}%` }}
            />
        </div>
    );
}