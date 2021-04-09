import React from 'react'
import Link from 'next/link'
import {Card,Button} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

function Article({ article }) {
    return (
        <>        
            <Link href={'article/[id]'} as={`article/${article.id}`}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>
                            {article.body}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Link> 
        </>
    )
}

export default Article
