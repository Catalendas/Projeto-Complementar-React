import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";

import './global.css'
import styles from './App.module.css'
import { SideBar } from "./components/Sidebar/Sidebar";

const post = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/Catalendas.png',
            name: 'Marcos Cardoso',
            role: 'Desenvolvedor web'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋'},
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            { type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2022-05-10 20:00:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/srlegramante.png',
            name: 'Erik',
            role: 'Desenvolvedor web'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋'},
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            { type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2022-05-13 20:00:00'),
    }
]

export function App() {
    return(
        <div>
            <Header />
           
           
           <div className={styles.wrapper}>
                <SideBar />

                <main>
                    {post.map(post =>{
                        return (
                            <Post
                                key={post.id} 
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        )
                    })}
                </main>
           </div>
        </div>
        
    )
}