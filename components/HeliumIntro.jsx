import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import moment from 'moment'


const Container = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    background: rgb(56,68,75);
    background: radial-gradient(circle, rgba(56,68,75,1) 0%, rgba(35,43,48,1) 100%); 

    h1 {
        color: white;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    p {
        color: white;
        font-size: 16px;
    }
`
const Wrapper = styled.div`
    display: flex;
    height: auto;
    margin-top: 60px;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 80%;
    padding: 0 10px;

    @media only screen and (max-width: 400px) {
            width: 90%;
            padding: 0 5px;
        }
`

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'

const HeliumIntro = () => {

    return (
        <Container id="heliumintro">
            <Wrapper>
                    <h1>People Powered Network.</h1>
                    <h1>Work in progress...</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cumque sunt accusantium recusandae repellendus vitae non cupiditate autem ab quo?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam deleniti at quaerat sint est tenetur animi eligendi accusamus optio voluptatibus provident facilis eos, vel numquam sunt fugit nisi doloribus! Autem, reiciendis ratione. Ducimus perferendis sunt dicta, autem obcaecati quae excepturi.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam deleniti at quaerat sint est tenetur animi eligendi accusamus optio voluptatibus provident facilis eos, vel numquam sunt fugit nisi doloribus! Autem, reiciendis ratione. Ducimus perferendis sunt dicta, autem obcaecati quae excepturi.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam deleniti at quaerat sint est tenetur animi eligendi accusamus optio voluptatibus provident facilis eos, vel numquam sunt fugit nisi doloribus! Autem, reiciendis ratione. Ducimus perferendis sunt dicta, autem obcaecati quae excepturi.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consectetur quos ratione tempora excepturi, quam eius consequuntur repellat autem voluptates reprehenderit doloremque adipisci tenetur dignissimos quia in. Quibusdam, cupiditate minus qui architecto ea in doloremque dolores facere. Iure laudantium minus temporibus nemo, praesentium cupiditate quibusdam odit quod est aspernatur repudiandae aut laborum! Nostrum ea error dolorum architecto ad sapiente deleniti harum maxime nam ducimus. Error quod inventore consequatur placeat corporis quas, perspiciatis, facilis at, aperiam sapiente aut ratione porro. Culpa qui ipsam quos ex omnis reiciendis impedit fugit magni totam, hic repellendus quo quaerat odio dolores explicabo nisi possimus minus tempore velit sapiente? Distinctio temporibus perferendis voluptatibus nam inventore iure rem tempora odit quas aut culpa maiores exercitationem animi autem unde incidunt quis, minus eius nobis, modi error vitae. Saepe, rem aperiam necessitatibus repellat doloremque optio quam, eum fugit sint velit iure neque. Iure quo, quam quibusdam hic eum perspiciatis similique harum earum officiis aliquam vel quod dolor dolore numquam expedita nihil voluptatibus, atque blanditiis nobis facere totam neque velit? Exercitationem, sunt in assumenda similique nesciunt quibusdam! Ducimus labore tempore sequi unde nesciunt, quae doloribus vero accusamus molestiae reiciendis, deleniti quo commodi voluptatem veniam magnam! Fuga totam hic numquam omnis incidunt inventore, voluptates molestias repudiandae harum? Natus, suscipit. Ullam, ut repudiandae! Dolor inventore tempora vero, nostrum possimus facere. Sit repellendus soluta pariatur accusamus neque unde reiciendis doloremque, eveniet rerum nisi debitis necessitatibus officia temporibus doloribus voluptate incidunt quos assumenda? Numquam itaque aut, et veniam iusto assumenda animi labore sint illum tenetur error in maiores dolores est dignissimos repudiandae obcaecati omnis magnam sunt ea dolor officia quisquam nostrum? Earum ex tempore recusandae rem, saepe cumque fugit, error est perferendis eos facilis neque. Atque soluta repudiandae tenetur repellat nihil. Illum minima natus eos id unde, labore enim blanditiis reprehenderit esse molestias. Suscipit deserunt officia exercitationem ducimus numquam dolor ipsam minus sit totam soluta accusantium perferendis earum voluptate, voluptatum esse quibusdam corrupti? Similique rem temporibus odit veritatis aliquid, ipsam ducimus in repudiandae. Temporibus numquam unde culpa dicta quisquam delectus ratione facilis quas impedit perspiciatis minima mollitia asperiores a optio assumenda molestias magni adipisci fugit ad ipsa, repudiandae rem quasi perferendis placeat. Maiores deleniti ipsam perspiciatis eum ratione obcaecati tenetur, quia est minima asperiores fuga aliquid, corporis voluptatum officiis modi non saepe necessitatibus debitis sit. Incidunt perspiciatis enim voluptatem officia ullam pariatur, suscipit iste deleniti officiis sapiente natus esse aut quis aliquid? Ad, inventore?</p>
                    
               
            </Wrapper>
        </Container>
    )
}

export default HeliumIntro
