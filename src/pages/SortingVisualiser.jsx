import ProjectNav from "../components/ProjectNav"
import Bubble from "../assets/Videos/Sorter/bubble.mp4"
import Insertion from "../assets/Videos/Sorter/insertion.mp4"
import Merge from "../assets/Videos/Sorter/merge.mp4"
import Quick from "../assets/Videos/Sorter/quick.mp4"

export default function SortingVisualiser() {
    return (
    <>
        <ProjectNav gitLink="https://github.com/mikey-s249/Sorting-Visualiser" />
        <div className="container-lg">
            <div className="row justify-content-center">
                <div className="col-5 m-5 text-center">
                    <h1>Sorting Visualiser</h1>
                </div>
            </div>
        </div>

        <section id="Projects" className="mt-5">
            
            
            <div className="container-lg">
                <h3>Introduction</h3>
                <p>To help me better understand the basic sorting algorithms I had been taught in my Algorithms className, I created a small piece of software to visualise a selection of these sorting algorithms. I had always found these online videos of sorting algorithm visualisation interesting, so I took inspiration from them.</p>
                
                
                
                <h3>Project Overview</h3>
                <p>
                    To do this, I used Pygame with Python for the graphical aspect. I defined a function which took in the array that is being sorted, and a parameter to highlight values that are being worked on. 
                </p>

                <p>
                    With this complete, I just needed to implement the sorting algorithms, and call that function whenever a change was made.
                </p>



                <p>
                    First I made a simple bubble sort with no optimisations, then a second version that stopped early if no swaps were made. Then I third version that didn't check the sorted sublist at the end of the list
                    <ul>
                        <li>
                            I made three so I could compare the differences that the optimisations made
                        </li>
                    </ul>
                </p>
                <div className="video-divs">
                    <video controls className="videos">
                        <source src={Bubble} type="video/mp4"/>
                    </video>
                    <p className="text-light">Bubble Sort with optimisations on array of length 50</p>
                </div>
                <p>
                    Then I implemented insertion sort, quick sort and merge sort.
                </p>

                <div className="video-divs">
                    <video controls className="videos">
                        <source src={Insertion} type="video/mp4"/>
                    </video>
                    <p className="text-light">Insertion Sort on array of length 50</p>
                </div>



                <div className="video-divs">
                    <video controls className="videos">
                        <source src={Merge} type="video/mp4"/>
                    </video>
                    <p className="text-light">Merge Sort on array of length 960</p>
                </div>

                

                <div className="video-divs">
                    <video controls className="videos">
                        <source src={Quick} type="video/mp4"/>
                    </video>
                    <p className="text-light">Quick Sort on array of length 960</p>
                </div>


                <p>
                    Using python's argparse, I created command line arguments to select the sorting algorithm, the size of the array to be sorted, and the speed of the simulation.
                </p>


                <h3>Conclusion?</h3>
                <p>
                    This was a very simple project that didn't take long to complete, however it was valuable in reinforcing my understanding of an important aspect of computer science.
                </p>


            </div>
        </section>
    </>
    )
}