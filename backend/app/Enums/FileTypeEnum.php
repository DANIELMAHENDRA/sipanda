<?php

namespace App\Enums;

enum FileTypeEnum:string
{
    case IMAGE = 'image';

    case DOCUMENT = 'document';

    case VIDEO = 'video';
}