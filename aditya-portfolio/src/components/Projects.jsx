
import React from "react";
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Cab Service' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={image} alt="" />
            </a>}
            {title=='Big Integer - C++ Library' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={image} alt="" />
            </a>}
            {title=='UCL Stats Analysis' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={image} alt="" />
            </a>}
            {title=='Fitness Revolution Gym' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={image} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            <b>{tag}</b>
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Cab Service',
        description:'This is a cab service Rest-API application which can be integrated with any frontend application, which has various modules as Admin and Users, it allows you to register, login as a user with mobile and email verification, book your your cab and see details for previous trips. For admin it has features to manage users and its trips through various APIs.',
        image: "https://www.indorecab.in/wp-content/uploads/2021/10/cab-service-in-indore.jpg",
        git:'https://github.com/aditya1308/Cab-Service',
        technologies:['Java,', 'Springboot,', 'MySQL']
    },
    {
        title:'Big Integer - C++ Library',
        description:'The <bigintegerc++.h> is a header file that reduces your 700 lines of code to just a function call in one line for handling very big numbers and in performing large calculations. C++ has no functions that helps in calculations of big integers. Therefore, it provides functions that helps in achieving large calculations. Functions present are addition, subtraction, multiplication, factorial and power.',
        image: "https://faheel.github.io/BigInt/logo.png",
        git:"https://github.com/aditya1308/Big-Integers-CPP",
        technologies:[ 'C++,', 'OOPs']
    },
    {
        title:'UCL Stats Analysis',
        description:'Analysis of all players and their stats from the year 2013 to 2021, the dataset has been taken from Kaggle. The analysis has various dynamic charts and observation made by using pivot table and creating data table by the help of power pivot in excel ETL process done using Tableau Prep.',
        image: "https://www.yakagency.com/assets/Uploads/UCL-logo.jpg",
        git:"https://github.com/aditya1308/UCL-Stats-Analysiss-CPP",
        technologies:[ 'Tableau Prep,', 'Excel- Power Pivot']
    },
    {
        title:'Fitness Revolution Gym',
        description:'It is a gym management system app built on Python using OOPS and GUI using tkinter. It has various modules like registration and billing system that helps in swift management of gyms, the details are saved in database using My SQL Lite.',
        image: "https://images.squarespace-cdn.com/content/v1/5f0f4485c43a8465bbedc0b2/1643216442410-103UZTQQ8I3XNQS1AV4X/unsplash-image-lrQPTQs7nQQ.jpg",
        git:"https://github.com/aditya1308/Gym-Management-System-PYTHON-GUI-",
        technologies:[ 'Python,', 'Tkinter,','MysSQL Lite']
    }
]

export default Projects