// users profile information will be added from the database
// users profile information will be displayed on the left side of the screen.
// users profile metrics will be displayed on the right side of the screen.
// user will have two buttons; one to view previous entries / logs, and one to view / manage the cellar

import ProfileInformation from "./profileInformation";

function ProfilePage() {
    return ( 
        <section className="profilePage">
            <ProfileInformation />
            <article id="userMetrics">
                <p>METRICS TO BE ADDED LATER ON.</p>
            </article>
        </section>
    );
}

export default ProfilePage;