
export default function ChooseBox( {currentCategory, categoryCounts} ) {


    return (
        <div>
            <p>Current Category: {currentCategory}</p>
            <h3>Counts</h3>
            <ul>
                {categoryCounts}
            </ul>
        </div>
    );
}

