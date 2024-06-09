import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import { CKBox, CKBoxImageEdit } from "@ckeditor/ckeditor5-ckbox";
import Link from '@ckeditor/ckeditor5-link/src/link';
import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
// import CKFinderUploadAdapter from '@ckeditor/ckeditor5-ckfinder/src/ckfinderuploadadapter';
import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import '@ckeditor/ckeditor5-build-classic/build/translations/zh';


ClassicEditor
    .create( document.querySelector( '#editor' ), {
        language: 'zh', // 設定語言為繁體中文
        plugins: [ 
            Essentials, 
            Paragraph, 
            Bold, 
            Italic, 
            Image,
            ImageToolbar,
            ImageCaption,
            ImageStyle,
            ImageUpload,
            ImageResize,
            // CKBox,
            // CKBoxImageEdit,
            Link,
            // PictureEditing,
            // CloudServices,
            CKFinder,
            CKFinderUploadAdapter
        ],
        toolbar: [ 'bold', 'italic', '|', 'imageUpload' ],
        ckfinder: {
            // Upload the images to the server using the CKFinder QuickUpload command.
            uploadUrl: 'http://localhost:8080/upload.php',

            // Define the CKFinder configuration (if necessary).
            options: {
                resourceType: 'Images'
            },
            openerMethod: 'popup'
        },
        image: {
            resizeOptions: [
                {
                    name: 'resizeImage:original',
                    value: null,
                    icon: 'original'
                },
                {
                    name: 'resizeImage:custom',
                    value: 'custom',
                    icon: 'custom'
                },
                {
                    name: 'resizeImage:50',
                    value: '50',
                    icon: 'medium'
                },
                {
                    name: 'resizeImage:75',
                    value: '75',
                    icon: 'large'
                }
            ],
            insert: {
                // If this setting is omitted, the editor defaults to 'block'.
                // See explanation below.
                type: 'auto'
            },
            styles: [
                'inline', 'block', 'side', 'alignLeft', 'alignCenter', 'alignRight'
            ],
            toolbar: [
                'toggleImageCaption',
                'imageTextAlternative',
                '|',
                'resizeImage:50',
                'resizeImage:75',
                'resizeImage:original',
                'resizeImage:custom',
                '|',
                'imageStyle:inline', 
                'imageStyle:block', 
                'imageStyle:side', 
                '|', 
                'imageStyle:alignLeft', 
                'imageStyle:alignCenter', 
                'imageStyle:alignRight'
            ]
        }
    } )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        console.error( error.stack );
    } );