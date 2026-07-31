<?php

namespace App\Enums;

enum RoleEnum:string
{
    case SUPER_ADMIN = 'super_admin';

    case ADMIN = 'admin';

    case OPERATOR = 'operator';

    case KEPALA_DESA = 'kepala_desa';
}