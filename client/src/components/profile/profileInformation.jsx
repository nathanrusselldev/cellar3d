const tempStyle = {
    width:`500px`,
    height:`500px`,
    backgroundColor:`#202121`,
}

function ProfileInformation() {
    return ( 
        <article className="profileInformation">
            <h2>UserName to be populated by the database</h2>
                <figure style={tempStyle}></figure>
                <h3>
                    <span id="profileFirstN">First name</span><span id="profileLastN">Last name</span>
                </h3>
        </article>
    );
}

export default ProfileInformation;