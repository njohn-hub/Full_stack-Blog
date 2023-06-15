import React from "react";
import Edit from "../Img/edit.png";
import Delete from "../Img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../Components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/17167967/pexels-photo-17167967/free-photo-of-wood-road-dawn-landscape.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />

        <div className="user">
          <img
            src="https://images.pexels.com/photos/16971540/pexels-photo-16971540/free-photo-of-woman-standing-with-gray-horse.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ipsam.
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          velit atque architecto sint possimus soluta exercitationem doloremque
          reiciendis libero iste, ex aliquam non perferendis culpa, voluptate
          totam sed autem, veritatis numquam voluptatum. Repellat, neque soluta
          sint eaque nisi nemo dignissimos eligendi sapiente odio qui ea fuga
          molestiae quos autem suscipit ipsum reprehenderit ducimus repudiandae
          numquam culpa incidunt architecto! Illo officiis laudantium pariatur
          corrupti doloribus nobis facilis voluptatibus reprehenderit ab quae
          aspernatur provident repellendus sit tempore ducimus quas hic
          laboriosam rem, adipisci blanditiis? Est ut quae, assumenda veritatis
          sit quo quos magni saepe, cum repellendus et natus. Temporibus
          praesentium autem numquam inventore molestiae placeat accusantium
          accusamus laudantium ab. Possimus atque, impedit illum placeat
          praesentium repudiandae minus nisi rerum ab sapiente velit fuga porro
          deserunt repellendus? Quam itaque iusto neque fuga! Eaque corrupti
          modi illo quod saepe aperiam, quia voluptatum quos molestiae quam
          autem repudiandae, numquam doloribus dolor dolores, et consectetur
          omnis porro debitis animi minus consequatur. Porro molestiae suscipit
          dolor qui laudantium cumque non vel, necessitatibus amet neque iusto
          quas velit voluptatum explicabo esse aliquid? Itaque molestias iusto,
          alias ullam saepe voluptates nam neque magni laboriosam sint
          aspernatur consectetur, ex beatae officiis dignissimos quidem
          perferendis quae velit amet id quam cum? Saepe corporis culpa ipsam
          illo rem perspiciatis iure eligendi reiciendis aliquam nihil quaerat
          magnam, itaque optio fugiat atque? Pariatur voluptate cumque
          perspiciatis aperiam soluta tenetur quibusdam provident distinctio est
          illum, atque totam harum et quo recusandae sequi eius, sit ut rem
          consequatur voluptates.
           Ipsam nam dolor quo ipsum debitis maiores
          cumque, quidem perspiciatis, quia sit alias eveniet! Quos ullam et
          obcaecati magnam ipsam dolorum possimus ex asperiores molestias
          molestiae, ea cumque veniam porro dignissimos magni! Exercitationem
          iste quam dolores voluptas suscipit. Autem laborum quasi nobis vel
          voluptatibus qui nam debitis maxime rem tenetur eius cum hic
          recusandae, dolor harum impedit ad soluta, neque reprehenderit?
          Perferendis atque, qui mollitia consequatur dolor est, odit veniam aut
          doloribus dolore quibusdam beatae quod, in cum corrupti. Sapiente
          eaque saepe adipisci asperiores eveniet velit odit eius in ipsa ipsum
          consequuntur doloribus quod libero totam fugit, tenetur voluptatem
          facere dolor eligendi veritatis. 
           Adipisci, eligendi ipsam, similique
          deserunt consequatur neque quasi commodi ducimus excepturi, quis
          alias. Dolor reiciendis in aliquid eius maxime expedita commodi quas
          assumenda eos incidunt, autem inventore consequatur asperiores
          officiis veniam ut pariatur. Maiores ipsum assumenda, esse, eaque
          expedita praesentium nostrum amet ducimus et dolorum earum asperiores
          repellendus quae itaque sapiente explicabo magni voluptatum?
          Voluptatum vitae aliquam qui placeat perferendis autem, tempore dolor
          ducimus ipsum maiores minus quasi repudiandae adipisci nisi facere
          eius atque numquam hic quae iure. Quas odio soluta nam sunt. Sapiente
          nemo ipsa voluptatum corrupti animi aliquam porro laborum, veniam
          vero, adipisci et eos deserunt perferendis labore. Iste, quia. Earum
          est commodi doloremque sapiente eligendi nihil nobis provident, sit
          natus vitae veritatis dicta accusantium omnis suscipit, aliquam fugiat
          amet harum. Ipsum eum maiores quam magni porro repudiandae dicta,
          ratione earum reprehenderit numquam rem quaerat itaque ducimus eveniet
          incidunt, iusto animi voluptates nihil consectetur optio nobis! Vel,
          assumenda. Excepturi magni enim reprehenderit.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
