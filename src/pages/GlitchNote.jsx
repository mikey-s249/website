import ProjectNav from "../components/ProjectNav"
import GlitchNoteGameplay from "../assets/Videos/GlitchNote/gameplay.mp4"


export default function GlitchNote() {
    return (
        <>
            <ProjectNav />

            <div className="container-lg">
                <div className="row justify-content-center">
                    <div className="col-5 m-5 text-center">
                        <h1>GlitchNote</h1>
                    </div>
                </div>
            </div>

            <section id="Projects" className="mt-5">
                
                
                <div className="container-lg">
                    <h3>What is GlitchNote</h3>
                    <p>GlitchNote is a startup company that develops mobile games founded by me and some fellow university students.<br/></p>
                    <br/>
                    
                    <h3>ByteJam</h3>

                    <p>Currently we are developing a game called ByteJam. This game is inspired by the popular mobile game Block Blast but with the addition of musical elements that change as you play.</p>


                    <p>
                        The game works like Block Blast but when you clear lines, specific music tracks will play, such as melody, chords, bass, or drums. All of the tracks are at the same tempo and key so it always sounds correct. There are hundreds of different combinations as there are over 35 different tracks for just the first level.
                        
                        <br/>
                    </p>

                    <div style={{width: "100%"}}>

                        <video controls style={{height: "100%", width: "100%"}}>
                            <source src={GlitchNoteGameplay} type="video/mp4"/>
                        </video>
                    </div>

                    


                    <h3>My Role</h3>
                    <p>
                        With GlitchNote, My role is the CTO/Lead Developer. I have been responsible for the vast majority of the development of the game so far. In addition, I have helped come up with the concept and ideas for how the game works.

                    </p>
                    




                    <h3>Skills Developed</h3>
                    <p>
                        I believe I have developed many skills while working with GlitchNote. As the developer, I have needed to design all of the systems from scratch and workout how all the components will interact.
                    </p>
                    <p>
                        I also have needed to apply many different algorithms and techniques when developing this game, such as connected component analysis, chain codes, etc.
                    </p>

                    <p>
                        In addition to all of the technical knowledge, I have gained more experience working with others on project. I have used many agile techniques such as user stories and iterative development to ensure the project was receiving ongoing feedback. In addition, I have had to give regular updates on my development progress and give presentations.
                    </p>


                </div>
            </section>
        </>
    )
}