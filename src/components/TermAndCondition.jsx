import {useEffect} from 'react'
import { styles } from '../styles'

const TermAndCondition = ({showTerms, setShowTerms}) => {

    useEffect(() => {
        if (showTerms) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
    
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [showTerms]);
  return (
    <div className={`h-screen fixed top-0 left-0 bottom-0 right-0 z-[100] flex flex-col justify-center items-center my-0 mx-[auto]  w-[100%]  bg-[#cacacaf0] animate-pop-up overflow-y-auto`}>
      <div onClick={() => setShowTerms(false)} class="fixed z-50 right-0 top-2 p-2  mr-4 space-y-2 group group-hover:scale-[1.1] select-none cursor-pointer">
        <span class="block h-1 w-6 sm:h-1 sm:w-10 origin-center rounded-full bg-black transition-transform ease-in-out rotate-45 translate-y-1.5 group-hover:bg-primary_100"></span>
        <span class="block h-1 w-6 sm:h-1 sm:w-10  origin-center rounded-full bg-black transition-transform ease-in-out -rotate-45  -translate-y-1.5 group-hover:bg-primary_100"></span>
      </div>
      <div>
      <div className="w-full   overflow-y-auto max-h-[100vh] min-h-[100vh] p-4">
      <h1
        className={`${styles.h2}  font-bold  leading-tight text-center`}
      >
       Terms and Conditions
      </h1>
        <p className={`${styles.paragraph} text-black text-center`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consequatur maiores sit! Itaque deserunt quo in animi repudiandae officiis dolore quia esse voluptates illo ducimus deleniti sint, a ipsum eius incidunt consequuntur dignissimos aperiam quaerat obcaecati eligendi unde libero? Dolore vel porro quidem vitae delectus possimus dicta officiis veritatis itaque temporibus ullam, dolorem recusandae, veniam omnis dolores eos dolorum eius unde sunt. Rerum dolor illo corrupti sed itaque, perspiciatis non at neque sint mollitia quasi quaerat quis pariatur fugiat optio fugit, aspernatur consequatur culpa sequi. Saepe quidem a numquam enim ut quasi, mollitia modi odit harum. Ex, quasi. Odit ipsam asperiores voluptatibus consectetur, temporibus praesentium velit? Architecto sunt, ratione molestias iure aspernatur esse ex magnam sapiente consequuntur asperiores ea, cupiditate fugit ducimus autem, excepturi facere velit repellat similique ad. Blanditiis, libero ut minima delectus eveniet illum repudiandae ipsa perspiciatis, nemo amet tempore ad eos quibusdam explicabo, nobis iste voluptas consequatur rerum. Nemo, id. Blanditiis quis est error dicta provident eos, iste, minus recusandae ab culpa cum nam esse! Fugit, perspiciatis mollitia! Amet blanditiis, suscipit provident assumenda id quisquam nesciunt esse, ut fuga quas iste nobis cupiditate odit corporis totam aliquam qui aspernatur veniam dignissimos voluptatum, iusto eligendi cum enim aliquid. Placeat soluta molestias accusamus fugit ab similique natus libero quos, quisquam cum ipsam dolor velit cupiditate recusandae sapiente porro necessitatibus doloribus aspernatur? Aliquid culpa id suscipit asperiores nemo obcaecati exercitationem officiis. Voluptates odio praesentium explicabo laudantium quae, at velit nisi qui eum doloribus aliquid a? Cum obcaecati quaerat suscipit minima debitis eos iusto magnam similique rem nam, et sapiente magni expedita? Aut earum delectus, saepe alias amet, fuga quisquam debitis dignissimos molestias repudiandae quis voluptatibus repellendus quod non veritatis cumque. Voluptatibus iste excepturi debitis repellat, dolorum molestias quos aliquid facilis, nisi, adipisci fugit vel. Dolore deserunt omnis minus minima. Aperiam quod ducimus iusto eum distinctio, odio quas dicta sed similique, perferendis facere ea unde maxime saepe magnam voluptate dignissimos totam laudantium mollitia! Mollitia voluptates ut, optio perferendis officiis magnam veritatis architecto aut, provident fugiat dolores nulla rerum exercitationem excepturi. Id aperiam iste corrupti cumque, alias rerum, hic commodi quam ut porro nesciunt est temporibus. Eveniet natus possimus reiciendis maxime odit ullam eum similique! Quis, quas blanditiis nostrum sed in necessitatibus quibusdam quos ipsa dicta nesciunt dolor consectetur error vel? Ratione, nihil similique! Vitae tenetur ipsam unde est distinctio quod non id ut sit esse, suscipit vero tempora, iure earum amet dolores atque consectetur iste minima perspiciatis voluptatibus veritatis rem! Error incidunt magni ullam nam molestiae soluta fugiat alias quasi distinctio voluptatum quae cupiditate labore aperiam ipsa eaque hic cumque ea commodi molestias aliquid illum, quaerat nisi. Autem sequi obcaecati beatae laudantium incidunt odio magnam reprehenderit distinctio quaerat libero quasi quas ab minima, similique earum magni natus impedit repellat accusantium perferendis. Perspiciatis, tempore sapiente adipisci nisi voluptatum dolor quas rem! Corporis, consectetur nihil! Voluptas impedit, veritatis quam amet sequi nisi quos unde nam est. Odit, eaque ab. Facilis non earum voluptates? Quod odio harum sit, maiores quaerat ipsa sed laboriosam iste?
      </p> 
      </div>

     
      </div>
     
     
    </div>
  )
}

export default TermAndCondition