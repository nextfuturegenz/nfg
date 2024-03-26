import { atom } from 'recoil';
import project1 from '../assets/project-1.jpg'
import project2 from '../assets/project-2.jpg'
import project3 from '../assets/project-3.jpg'
import project4 from '../assets/project-4.jpg'
import project5 from '../assets/project-5.jpg'
import project6 from '../assets/project-6.jpg'

const projects = [
    {
        imageUrl: project1,
        path: '#',
        title: 'Project 1',
        subTitle: 'display case',
        size: '4'
    },
    {
        imageUrl: project2,
        path: '#',
        title: 'Project 2',
        subTitle: 'display case',
        size: '8'
    },
    {
        imageUrl: project3,
        path: '#',
        title: 'Project 3',
        subTitle: 'display case',
        size: '8'
    },
    {
        imageUrl: project4,
        path: '#',
        title: 'Project 4',
        subTitle: 'display case',
        size: '4'
    },
    {
        imageUrl: project5,
        path: '#',
        title: 'Project 5',
        subTitle: 'display case',
        size: '4'
    },
    {
        imageUrl: project6,
        path: '#',
        title: 'Project 6',
        subTitle: 'display case',
        size: '8'
    },
]

export const projectAtom = atom({
    key: 'project',
    // get initial state from local storage to enable user to stay logged in
    default: projects
});
