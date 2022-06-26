import style from './Post.module.css'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent} from 'react'

interface Author {
    name:string
    role:string
    avatarUrl:string
}
interface Content {
    type: 'paragraph' | 'link'
    content: string
}

interface PostProps{
    author: Author
    publishedAt: Date
    content: Content[]
}


export function Post({ author, publishedAt, content }: PostProps) {

    const [comments, setComments] = useState([
        "Post muito bacana..hein?!",
    ])

    const [newTextComment, setNewTextComment] = useState('')

    const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR,
    })

    const publicshedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreeateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newTextComment])

        setNewTextComment('')
    }

    function handleNewTextComment(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewTextComment(event.target.value)
    }

    function handleNewCommentInvalible (event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo precisar ser preenchido')
    }

    function deleted(commentDelete: string) {
        const commentsWithoutDeletedOne = comments.filter( comment => {
                return comment != commentDelete  
            }  
        )

        setComments(commentsWithoutDeletedOne)    
    }

    const isNewCommentEnpty = newTextComment.length == 0

    return(
        <article className={style.post}>

            {/* Cabeçalho do post */}

            <header>
                <div className={style.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
                    {publicshedDateRelativeNow}
                </time>
            </header>

            {/* Conteudo do Post */}

            <div className={style.content}>
               
                {content.map(line => { 
                        if(line.type == 'paragraph'){
                            return  <p key={line.content}>{line.content}</p>
                        } else if (line.type == 'link') {
                            return  <p key={line.content}><a href='#'>{line.content}</a></p>
                        }         
                })}

            </div>

            <form onSubmit={ handleCreeateNewComment } className={style.commentForm}>

                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"    
                    placeholder='Deixe um comentario'
                    value={newTextComment}
                    onChange={handleNewTextComment}
                    onInvalid={handleNewCommentInvalible}
                    required
                ></textarea>

                <footer>
                    <button type='submit' disabled={isNewCommentEnpty}>Publicar</button>
                </footer>

            </form>

            <div className={style.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment}
                            onDelete={deleted}
                        />
                    )
                })}
            </div>
        </article>
    )
}
