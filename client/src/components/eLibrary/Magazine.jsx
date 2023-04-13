import React from 'react'
import './library.css';
import ToggleVisibility from "./ToggleShow";
import MagazineMore from './MoreMagazines';

const Magazine = () => {
    const magazineDetails = [
        {
            "name": "Pandulipi",
            "year": "2018-2019",
            "imgLink": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564",
            "downloadLink": "#######",
            "rating": 3
        },
        {
            "name": "Pandulipi",
            "year": "2018-2019",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsf8N7-q8AKvxahFanHJNnJLMRYas7H7MRwQ&usqp=CAU",
            "downloadLink": "#######",
            "rating": 3
        },
        {
            "name": "Pandulipi",
            "year": "2018-2019",
            "imgLink": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564",
            "downloadLink": "#######",
            "rating": 3
        },
        {
            "name": "Pandulipi",
            "year": "2018-2019",
            "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsf8N7-q8AKvxahFanHJNnJLMRYas7H7MRwQ&usqp=CAU",
            "downloadLink": "#######",
            "rating": 3
        },
        {
            "name": "Pandulipi",
            "year": "2018-2019",
            "imgLink": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564",
            "downloadLink": "#######",
            "rating": 3
        },

    ]

    return (
        <div>
            <h4 className='text-center md:text-left md:pl-28'>Latest Editions of Pandulipi</h4>
            <div>
                <div id='row'>
                    {magazineDetails.map((details) => (
                        <div id='card'>
                            <div className='relative'>
                                <img src={details.imgLink} alt={details.name} />
                                <a href={details.downloadLink} id='button' className='absolute bottom-20 right-5 rounded-full py-[10px] px-[15px] bg-white shadow-md'>
                                    <span id='download' className="material-symbols-rounded">download</span>
                                </a>
                                <div className='details'>
                                    <p className='text-2xl font-semibold'>{details.name}</p>
                                    <p className='font-bold text-gray-700'>{details.year}</p>
                                    <div>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star unchecked"></span>
                                        <span className="fa fa-star unchecked"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div class = 'more'>
                    <ToggleVisibility>
                        <MagazineMore />
                    </ToggleVisibility>
                </div>

            </div>
            {/* <div id="loadmore">Load More</div> */}
        </div>
    )
}

export default Magazine