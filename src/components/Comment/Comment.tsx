import { ThumbsUp, Trash} from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import style from './Comment.module.css'

interface CommentProps {
    content: string
    onDelete: (Comment: string) => void
}

export function Comment({ content, onDelete }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDelete(content)
    }

    function handleLikeComment(){
        setLikeCount(state => {
            return state + 1
        })
    }

    return(
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://github.com/Catalendas.png" alt='' />

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                    
                        <div className={style.authorAndTime}>

                            <strong>Marcos</strong>
                            <time title='11 de Maio as 08:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>

                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>

                    </header>

                    <p>{ content }</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}