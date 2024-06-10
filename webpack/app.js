import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Bold, Italic, Underline, Strikethrough } from '@ckeditor/ckeditor5-basic-styles';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import Link from '@ckeditor/ckeditor5-link/src/link';
import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Font from '@ckeditor/ckeditor5-font/src/font';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { List } from '@ckeditor/ckeditor5-list';
import { Alignment } from '@ckeditor/ckeditor5-alignment';

// 載入語言包
import '@ckeditor/ckeditor5-build-classic/build/translations/zh';
import '@ckeditor/ckeditor5-alignment/build/translations/zh';
import '@ckeditor/ckeditor5-basic-styles/build/translations/zh';
import '@ckeditor/ckeditor5-block-quote/build/translations/zh';
import '@ckeditor/ckeditor5-font/build/translations/zh';
import '@ckeditor/ckeditor5-heading/build/translations/zh';
import '@ckeditor/ckeditor5-image/build/translations/zh';

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        language: 'zh', // 設定語言為繁體中文
        plugins: [ 
            Essentials, 
            Paragraph, 
            Bold, 
            Italic, 
            Image,
            Underline,
            Strikethrough,
            ImageToolbar,
            ImageCaption,
            ImageStyle,
            ImageUpload,
            ImageResize,
            Link,
            CKFinder,
            CKFinderUploadAdapter,
            Heading,
            Font,
            FindAndReplace,
            List,
            Alignment
        ],
        toolbar: [
            'undo',
            'redo',
            'findAndReplace',
            '|',
            'heading',
            'bulletedList',
            'numberedList',
            '|',
            'fontFamily',
            'fontSize',
            'fontColor',
            'fontBackgroundColor',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            '|',
            'alignment',
            '|',
            'imageUpload',
            '|',
            'link',
        ],
        fontFamily: {
            options: [
                'default',
                'Arial, Helvetica, sans-serif',
                'Courier New, Courier, monospace',
                'Georgia, serif',
                'Lucida Sans Unicode, Lucida Grande, sans-serif',
                'Tahoma, Geneva, sans-serif',
                'Times New Roman, Times, serif',
                'Trebuchet MS, Helvetica, sans-serif',
                'Verdana, Geneva, sans-serif'
            ]
        },
        fontSize: {
            options: [
                9,
                11,
                13,
                'default',
                17,
                19,
                21
            ]
        },
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
            ]
        },
        ckfinder: {
            // Upload the images to the server using the CKFinder QuickUpload command.
            uploadUrl: process.env.UPLOAD_URL || 'http://localhost:8080/upload.php',

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