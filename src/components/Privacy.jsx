import React, { useEffect } from "react";
import { styles } from "../styles";

const Privacy = ({ showPrivacy, setShowPrivacy }) => {
  useEffect(() => {
    if (showPrivacy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showPrivacy]);

  return (
    <div className={`h-[fit-content] fixed top-0 left-0 bottom-0 right-0 z-[100] pt-[2%] flex flex-col justify-center items-center my-0 mx-[auto]  w-[100%]  bg-[#cacacaf0] animate-pop-up `}>
      <div onClick={() => setShowPrivacy(false)} className="fixed z-50 right-0 top-2 p-2  mr-4 space-y-2 group group-hover:scale-[1.1] select-none cursor-pointer">
        <span className="block h-1 w-6 sm:h-1 sm:w-10 origin-center rounded-full bg-black transition-transform ease-in-out rotate-45 translate-y-1.5 group-hover:bg-primary_100"></span>
        <span className="block h-1 w-6 sm:h-1 sm:w-10  origin-center rounded-full bg-black transition-transform ease-in-out -rotate-45  -translate-y-1.5 group-hover:bg-primary_100"></span>
      </div>
      <div className="w-full   overflow-y-auto max-h-[100vh] min-h-[100vh] p-4">
      <div>
        <h1 className={`${styles.h1} text-2xl md:text-2xl lg:4xl xl:text-3xl font-bold  leading-tight text-center`}>
          Privacy Policy
        </h1>
      </div>
      <p className={`${styles.paragraph}  text-black text-center font`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae et incidunt consectetur alias adipisci quidem dolore recusandae nemo beatae maxime ut veritatis consequatur quibusdam tempora modi sit nam earum obcaecati, autem saepe, impedit voluptates eaque ea? Iusto, vitae! Eos est sint obcaecati quisquam corrupti deleniti facere unde aliquam facilis modi, officia ea blanditiis exercitationem, neque numquam, tenetur ducimus asperiores reprehenderit qui adipisci optio odit autem repellendus repellat. Dolores ea odit esse minus tempora! A delectus odio corporis sequi tenetur fugiat recusandae tempora quia eius odit. Temporibus atque ut quibusdam repellat architecto amet laborum corporis velit at illum reprehenderit laboriosam accusantium recusandae impedit consequuntur, quaerat vel aspernatur repellendus. Consequatur doloremque qui a voluptas incidunt similique. Quaerat culpa quos, quas, voluptate minus, incidunt assumenda enim perferendis autem laboriosam voluptatem placeat suscipit quibusdam dolores? Assumenda, tempora. Totam ipsam iusto fugit, reiciendis tempora, aliquam accusamus dolore perferendis labore hic animi illo, culpa sint porro dolorem in autem. Corporis, cupiditate rem reprehenderit voluptatem molestiae beatae saepe natus enim reiciendis quos laborum voluptatum accusamus laboriosam quis culpa. Fugiat minus saepe praesentium autem delectus quos reprehenderit nesciunt mollitia in rem iure placeat repellendus aut quas totam suscipit cupiditate, ipsa sint blanditiis nemo a, aliquam voluptatem tenetur quaerat. Quibusdam, porro quod. Voluptatum, labore et. Obcaecati, eos, aperiam dicta, quos illum explicabo minus distinctio quasi in soluta dolore. Non quae alias tempore dolor dicta molestias, commodi vero fuga velit nihil impedit animi ipsam! Nostrum labore nihil odit soluta corporis tempore, perferendis suscipit officia expedita sapiente sequi quasi maiores magnam autem dolor molestiae in aliquid vitae quos libero nemo beatae repudiandae unde! Facilis beatae voluptate quae magnam quos minus in ea quaerat modi, temporibus veritatis incidunt sunt? Accusamus ipsam vitae iure ut laborum, doloribus suscipit, laboriosam nisi eaque, voluptatibus adipisci placeat nobis provident distinctio quidem. Perferendis nobis itaque rem aspernatur alias assumenda, tenetur officia ratione rerum laudantium porro eveniet quo, eos quas cum odit harum doloribus error. Quos excepturi nihil corporis iste ipsam enim hic suscipit, cum esse beatae rem praesentium aliquam obcaecati fugit eligendi consequatur minus impedit officiis incidunt ad, odit sit atque. Molestias reiciendis vel nostrum error dolore consequuntur quaerat tempora voluptate voluptates blanditiis, excepturi quo delectus? Veritatis similique, praesentium sed iure error asperiores, qui maiores excepturi, voluptates impedit facilis inventore accusamus corrupti quia ipsam necessitatibus culpa? Recusandae nesciunt ex quaerat, quo sequi laborum architecto doloribus ducimus dignissimos, perferendis ratione quisquam sapiente quibusdam! Possimus rerum, ipsa corporis totam deserunt porro ex saepe tempore vitae eaque quod tenetur fuga cumque doloribus mollitia recusandae odit deleniti blanditiis error dicta! Illo, quisquam sapiente et cumque aspernatur ipsum voluptatem alias quis rem aperiam praesentium impedit vitae vero tempora excepturi ullam expedita reprehenderit perspiciatis? Dolor, hic unde! Nemo cupiditate modi quae molestias, ad suscipit at quisquam inventore nobis, maiores odit pariatur consectetur. Animi voluptatibus ipsam nam natus illum quibusdam accusantium vero quasi, fugit hic deserunt fugiat molestiae itaque dignissimos, debitis rem ducimus ullam sit quaerat in. Natus corrupti odio at sunt, explicabo velit? Quia odio repellendus, explicabo iusto nobis ea aspernatur eum possimus.
      </p>
      </div>
    </div>
  );
};

export default Privacy;
