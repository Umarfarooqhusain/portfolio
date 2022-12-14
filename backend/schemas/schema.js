// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import works from './works'
import brands from './brands'
import abouts from './abouts'
import experiences from './experiences'
import skills from './skills'
import workExperience from './workExperience'
import contact from './contact'
import testimonials from './testimonials'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([works, testimonials,  brands, abouts, skills, workExperience, experiences, contact
    /* Your types here! */
  ]),
})

// export default {
//     name:'testimonials',
//     title:'Testimonials',
//     type: 'document',
//     fields:[
//         { 
//             name:'name',
//             title:'Name',
//             type: 'string'
//         },
//         {
//             name:'company',
//             title:'Company',
//             type:'string'
//         },
//         {
//             name:'imgurl',
//             title:'ImgUrl',
//             type: 'image',
//             options: {
//               hotspot: true,
//             },
//         },  
//         {
//             name:'feedback',
//             title:'Feedback',
//             type:'string'
//         }
//     ]
// }