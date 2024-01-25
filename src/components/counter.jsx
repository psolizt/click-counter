import '../css/counter.css';

function Counter({numCliks}) {
    return (
        <div className="counter">
            {numCliks}
        </div>
    );
}

export default Counter;