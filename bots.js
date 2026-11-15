// AI routines from the archived One Slime port by mmkal.
// Original One Slime by Quin Pendragon / Daniel Wedge.
// https://github.com/mmkal/slimejs/blob/master/processed/ts/oneslime-one.ts
// See physics-reference-LICENSE.txt for the MIT license.
class Class_rn_c_1 {
    field_rn_c_void_13 ;

    field_rn_c_else_14 ;

    field_rn_c_do_15 ;

    field_rn_c_if_16 ;

    field_rn_c_g_17 ;

    field_rn_c_e_18 ;

    field_rn_c_byte_19 ;

    field_rn_c_try_20 ;

    field_rn_c_int_21 ;

    field_rn_c_for_22 ;

    field_rn_c_d_23 ;

    field_rn_c_b_24 ;

    field_rn_c_new_25 ;

    field_rn_c_f_26 ;

    /*public*/ field_rn_c_c_27 ;

    /*public*/ field_rn_c_case_28 ;

    static field_rn_c_goto_29  = 0;

    static field_rn_c_char_30  = 1;

    static field_rn_c_long_31  = 2;

    static field_rn_c_a_32  = 3;

    method_rn_c_a_9(var1 , var2 ) {
        this.field_rn_c_case_28 = var1;
        this.field_rn_c_c_27 = var2;
    }

    method_rn_c_a_10(var1, var2 , var3 ) {
        this.field_rn_c_void_13 = this.field_rn_c_c_27 === 2?var1[0]:1000 - var1[0];
        this.field_rn_c_else_14 = var1[1];
        this.field_rn_c_do_15 = this.field_rn_c_c_27 === 2?var1[2]:-var1[2];
        this.field_rn_c_if_16 = var1[3];
        this.field_rn_c_g_17 = this.field_rn_c_c_27 === 2?var1[4]:1000 - var1[8];
        this.field_rn_c_e_18 = this.field_rn_c_c_27 === 2?var1[5]:var1[9];
        this.field_rn_c_byte_19 = this.field_rn_c_c_27 === 2?var1[6]:-var1[10];
        this.field_rn_c_try_20 = this.field_rn_c_c_27 === 2?var1[7]:var1[11];
        this.field_rn_c_int_21 = this.field_rn_c_c_27 === 2?var1[8]:1000 - var1[4];
        this.field_rn_c_for_22 = this.field_rn_c_c_27 === 2?var1[9]:var1[5];
        this.field_rn_c_d_23 = this.field_rn_c_c_27 === 2?var1[10]:-var1[6];
        this.field_rn_c_b_24 = this.field_rn_c_c_27 === 2?var1[11]:var1[7];
        this.field_rn_c_new_25 = this.field_rn_c_c_27 === 2?var2:var3;
        this.field_rn_c_f_26 = this.field_rn_c_c_27 === 2?var3:var2;
    }

    method_rn_c_a_11() {}

    method_rn_c_a_12(var1 ) {
        if(this.field_rn_c_c_27 === 1) {
            switch((var1)) {
            case 0:
                this.field_rn_c_case_28.method_rn_Slime1P_b_82();
                break;
            case 1:
                this.field_rn_c_case_28.method_rn_Slime1P_c_81();
                break;
            case 2:
                this.field_rn_c_case_28.method_rn_Slime1P_char_84();
                break;
            case 3:
                this.field_rn_c_case_28.method_rn_Slime1P_try_83();
            }
        } else if(this.field_rn_c_c_27 === 2) {
            switch((var1)) {
            case 0:
                this.field_rn_c_case_28.method_rn_Slime1P_e_85();
                break;
            case 1:
                this.field_rn_c_case_28.method_rn_Slime1P_j_86();
                break;
            case 2:
                this.field_rn_c_case_28.method_rn_Slime1P_long_88();
                break;
            case 3:
                this.field_rn_c_case_28.method_rn_Slime1P_else_87();
            }
        }
    }

    constructor() {
        this.field_rn_c_void_13 = 0;
        this.field_rn_c_else_14 = 0;
        this.field_rn_c_do_15 = 0;
        this.field_rn_c_if_16 = 0;
        this.field_rn_c_g_17 = 0;
        this.field_rn_c_e_18 = 0;
        this.field_rn_c_byte_19 = 0;
        this.field_rn_c_try_20 = 0;
        this.field_rn_c_int_21 = 0;
        this.field_rn_c_for_22 = 0;
        this.field_rn_c_d_23 = 0;
        this.field_rn_c_b_24 = 0;
        this.field_rn_c_new_25 = false;
        this.field_rn_c_f_26 = false;
        this.field_rn_c_c_27 = 0;
        this.field_rn_c_case_28 = null;
    }
}

class Class_rn_d_4 extends Class_rn_c_1 {
    /*public*/ field_rn_d_i_49  = 0.85;

    /*public*/ field_rn_d_j_50  = -1;

    /*public*/ method_rn_d_try_45(var1 )  {
        return var1 * var1;
    }

    /*public*/ method_rn_d_new_46(var1 )  {
        let var2  = 0;
        let var3  = this.field_rn_c_else_14;
        let var4  = this.field_rn_c_if_16;
        while((true)) {
            --var4;
            if((var3 += var4) <= var1) {
                return var2;
            }
            ++var2;
        };
    }

    /*public*/ method_rn_d_int_47(var1 )  {
        let var2  = this.method_rn_d_new_46(var1);
        let var3  = this.field_rn_c_void_13;
        let var4  = this.field_rn_c_do_15;
        for(let var5  = 0; var5 < var2; ++var5) {
            var3 += var4;
            if(var3 < 0) {
                var3 = 0;
                var4 = -var4;
            } else if(var3 > 1000) {
                var3 = 1000;
                var4 = -var4;
            }
        };
        return var3;
    }

    method_rn_c_a_11() {
        if(this.field_rn_c_void_13 < 500 && this.field_rn_d_j_50 !== -1) {
            this.field_rn_d_j_50 = -1;
        }
        let var1  = this.method_rn_d_int_47(125);
        let var2  = this.method_rn_d_new_46(125);
        let var3 ;
        if(this.field_rn_c_for_22 !== 0 && this.field_rn_c_int_21 < 575) {
            var3 = 0;
        } else {
            var3 = 25 + ((10.0 * Math.random())|0);
        }
        if((this.field_rn_c_do_15 !== 0 || this.field_rn_c_void_13 !== 800) && this.field_rn_d_j_50 === -1) {
            if(var1 < 500) {
                if(Math.abs(this.field_rn_c_int_21 - 666) < 20) {
                    this.method_rn_c_a_12(3);
                } else if(this.field_rn_c_int_21 > 666) {
                    this.method_rn_c_a_12(0);
                } else if(this.field_rn_c_int_21 < 666) {
                    this.method_rn_c_a_12(1);
                }
            } else {
                if(Math.abs(this.field_rn_c_int_21 - var1) < var3) {
                    if(this.field_rn_c_for_22 !== 0 || this.field_rn_c_f_26 && Math.random() < 0.3) {
                        return;
                    }
                    if((this.field_rn_c_int_21 >= 900 && this.field_rn_c_void_13 > 830 || this.field_rn_c_int_21 <= 580 && this.field_rn_c_void_13 < 530) && Math.abs(this.field_rn_c_void_13 - this.field_rn_c_int_21) < 100) {
                        this.method_rn_d_int_48();
                    } else if(this.method_rn_d_try_45(this.field_rn_c_void_13 - this.field_rn_c_int_21) * 2 + this.method_rn_d_try_45(this.field_rn_c_else_14 - this.field_rn_c_for_22) < this.method_rn_d_try_45(170) && this.field_rn_c_void_13 !== this.field_rn_c_int_21) {
                        this.method_rn_d_int_48();
                    } else if(this.field_rn_c_do_15 * this.field_rn_c_do_15 + this.field_rn_c_if_16 * this.field_rn_c_if_16 < 20 && this.field_rn_c_void_13 - this.field_rn_c_int_21 < 30 && this.field_rn_c_void_13 !== this.field_rn_c_int_21) {
                        this.method_rn_d_int_48();
                    } else if(Math.abs(this.field_rn_c_void_13 - this.field_rn_c_int_21) < 150 && this.field_rn_c_else_14 > 50 && this.field_rn_c_else_14 < 400 && Math.random() < 0.666) {
                        this.method_rn_d_int_48();
                    }
                }
                if(this.field_rn_c_for_22 === 0 && this.field_rn_d_j_50 === -1) {
                    if(Math.abs(this.field_rn_c_int_21 - var1) < var3) {
                        this.method_rn_c_a_12(3);
                    } else if(var1 + var3 < this.field_rn_c_int_21) {
                        this.method_rn_c_a_12(0);
                    } else if(var1 + var3 > this.field_rn_c_int_21) {
                        this.method_rn_c_a_12(1);
                    }
                } else if(this.field_rn_d_j_50 === -1) {
                    if(this.field_rn_c_int_21 < 575) {
                        return;
                    }
                    if(this.field_rn_c_int_21 > 900) {
                        this.method_rn_c_a_12(1);
                        return;
                    }
                    if(Math.abs(this.field_rn_c_int_21 - this.field_rn_c_void_13) < var3) {
                        this.method_rn_c_a_12(3);
                    } else if(this.field_rn_c_void_13 < this.field_rn_c_int_21) {
                        this.method_rn_c_a_12(0);
                    } else if(this.field_rn_c_void_13 > this.field_rn_c_int_21) {
                        this.method_rn_c_a_12(1);
                    }
                }
            }
        } else {
            if(this.field_rn_d_j_50 === -1) {
                if(this.field_rn_c_g_17 > 250) {
                    this.field_rn_d_j_50 = 0;
                } else {
                    this.field_rn_d_j_50 = 1;
                }
                if(Math.random() < 0.35) {
                    this.field_rn_d_j_50 = ((2.0 * Math.random())|0);
                }
            }
            switch((this.field_rn_d_j_50)) {
            case 0:
                if(this.field_rn_c_else_14 < 300 && this.field_rn_c_if_16 < -3) {
                    this.method_rn_c_a_12(1);
                    this.method_rn_c_a_12(2);
                }
                break;
            case 1:
                if(this.field_rn_c_else_14 < 300 && this.field_rn_c_if_16 < 0) {
                    this.method_rn_c_a_12(0);
                    this.method_rn_c_a_12(2);
                }
            }
        }
    }

    /*public*/ method_rn_d_int_48() {
        if(Math.random() < 0.85) {
            this.method_rn_c_a_12(2);
        }
    }
}

class Class_rn_e_3 extends Class_rn_c_1 {
    /*public*/ field_rn_e_k_43  = 0.4;

    /*public*/ field_rn_e_l_44  = -1;

    /*public*/ method_rn_e_char_39(var1 )  {
        return var1 * var1;
    }

    /*public*/ method_rn_e_case_40(var1 )  {
        let var2  = 0;
        let var3  = this.field_rn_c_else_14;
        let var4  = this.field_rn_c_if_16;
        while((true)) {
            --var4;
            if((var3 += var4) <= var1) {
                return var2;
            }
            ++var2;
        };
    }

    /*public*/ method_rn_e_byte_41(var1 )  {
        let var2  = this.method_rn_e_case_40(var1);
        let var3  = this.field_rn_c_void_13;
        let var4  = this.field_rn_c_do_15;
        for(let var5  = 0; var5 < var2; ++var5) {
            var3 += var4;
            if(var3 < 0) {
                var3 = 0;
                var4 = -var4;
            } else if(var3 > 1000) {
                var3 = 1000;
                var4 = -var4;
            }
        };
        return var3;
    }

    method_rn_c_a_11() {
        if(this.field_rn_c_void_13 < 500 && this.field_rn_e_l_44 !== -1) {
            this.field_rn_e_l_44 = -1;
        }
        let var1  = this.method_rn_e_byte_41(125);
        let var2  = this.method_rn_e_case_40(125);
        let var3 ;
        if(this.field_rn_c_for_22 !== 0 && this.field_rn_c_int_21 < 575) {
            var3 = 0;
        } else {
            var3 = 23 + ((15.0 * Math.random())|0);
        }
        if((this.field_rn_c_do_15 !== 0 || this.field_rn_c_void_13 !== 800) && this.field_rn_e_l_44 === -1) {
            if(var1 < 500) {
                if(Math.abs(this.field_rn_c_int_21 - 800) < 20) {
                    this.method_rn_c_a_12(3);
                } else if(this.field_rn_c_int_21 > 800) {
                    this.method_rn_c_a_12(0);
                } else if(this.field_rn_c_int_21 < 800) {
                    this.method_rn_c_a_12(1);
                }
            } else {
                if(Math.abs(this.field_rn_c_int_21 - var1) < var3) {
                    if(this.field_rn_c_for_22 !== 0 || this.field_rn_c_f_26 && Math.random() < 0.3) {
                        return;
                    }
                    if((this.field_rn_c_int_21 >= 900 && this.field_rn_c_void_13 > 830 || this.field_rn_c_int_21 <= 580 && this.field_rn_c_void_13 < 530) && Math.abs(this.field_rn_c_void_13 - this.field_rn_c_int_21) < 100) {
                        this.method_rn_e_new_42();
                    } else if(this.method_rn_e_char_39(this.field_rn_c_void_13 - this.field_rn_c_int_21) * 2 + this.method_rn_e_char_39(this.field_rn_c_else_14 - this.field_rn_c_for_22) < this.method_rn_e_char_39(170) && this.field_rn_c_void_13 !== this.field_rn_c_int_21) {
                        this.method_rn_e_new_42();
                    } else if(this.field_rn_c_do_15 * this.field_rn_c_do_15 + this.field_rn_c_if_16 * this.field_rn_c_if_16 < 20 && this.field_rn_c_void_13 - this.field_rn_c_int_21 < 30 && this.field_rn_c_void_13 !== this.field_rn_c_int_21) {
                        this.method_rn_e_new_42();
                    } else if(Math.abs(this.field_rn_c_void_13 - this.field_rn_c_int_21) < 150 && this.field_rn_c_else_14 > 50 && this.field_rn_c_else_14 < 400 && Math.random() < 0.5) {
                        this.method_rn_e_new_42();
                    }
                }
                if(this.field_rn_c_for_22 === 0 && this.field_rn_e_l_44 === -1) {
                    if(Math.abs(this.field_rn_c_int_21 - var1) < var3) {
                        this.method_rn_c_a_12(3);
                    } else if(var1 + var3 < this.field_rn_c_int_21) {
                        this.method_rn_c_a_12(0);
                    } else if(var1 + var3 > this.field_rn_c_int_21) {
                        this.method_rn_c_a_12(1);
                    }
                } else if(this.field_rn_e_l_44 === -1) {
                    if(this.field_rn_c_int_21 < 575) {
                        return;
                    }
                    if(this.field_rn_c_int_21 > 900) {
                        this.method_rn_c_a_12(1);
                        return;
                    }
                    if(Math.abs(this.field_rn_c_int_21 - this.field_rn_c_void_13) < var3) {
                        this.method_rn_c_a_12(3);
                    } else if(this.field_rn_c_void_13 < this.field_rn_c_int_21) {
                        this.method_rn_c_a_12(0);
                    } else if(this.field_rn_c_void_13 > this.field_rn_c_int_21) {
                        this.method_rn_c_a_12(1);
                    }
                }
            }
        } else {
            if(this.field_rn_e_l_44 === -1) {
                if(this.field_rn_c_g_17 > 250) {
                    this.field_rn_e_l_44 = 0;
                } else if(this.field_rn_c_g_17 < 200) {
                    this.field_rn_e_l_44 = 1;
                } else if(this.field_rn_c_g_17 < 250) {
                    this.field_rn_e_l_44 = 2;
                }
                if(Math.random() < 0.35) {
                    this.field_rn_e_l_44 = ((3.0 * Math.random())|0);
                }
            }
            switch((this.field_rn_e_l_44)) {
            case 0:
                if(this.field_rn_c_else_14 < 300 && this.field_rn_c_if_16 < -3) {
                    this.method_rn_c_a_12(1);
                    this.method_rn_c_a_12(2);
                }
                break;
            case 1:
                if(this.field_rn_c_else_14 < 300 && this.field_rn_c_if_16 < 0) {
                    this.method_rn_c_a_12(0);
                    this.method_rn_c_a_12(2);
                }
                break;
            case 2:
                let var4  = 860;
                if(this.field_rn_c_if_16 > 12 && this.field_rn_c_int_21 < var4) {
                    this.method_rn_c_a_12(1);
                }
                if(this.field_rn_c_int_21 >= var4) {
                    this.method_rn_c_a_12(3);
                }
                if(this.field_rn_c_if_16 === -3 && this.field_rn_c_int_21 !== 800) {
                    this.method_rn_c_a_12(2);
                }
                if(this.field_rn_c_if_16 < -12 && this.field_rn_c_for_22 !== 0 && this.field_rn_c_int_21 >= var4 - 15) {
                    this.method_rn_c_a_12(0);
                }
            }
        }
    }

    /*public*/ method_rn_e_new_42() {
        if(Math.random() < 0.4) {
            this.method_rn_c_a_12(2);
        }
    }
}

class Class_rn_b_5 extends Class_rn_c_1 {
    /*public*/ field_rn_b_h_57  = -1;

    method_rn_c_a_11() {
        if(this.field_rn_b_h_57 === -1 && (this.field_rn_c_void_13 !== 800 || this.field_rn_c_do_15 !== 0)) {
            let var2  = this.method_rn_b_if_53(this.field_rn_c_for_22 + this.field_rn_c_b_24 + 30);
            let var1 ;
            if(var2 < 600) {
                var1 = 0;
            } else if(var2 < 700) {
                var1 = 10;
            } else {
                var1 = 20;
            }
            if(var2 < 450) {
                if(Math.abs(this.field_rn_c_int_21 - 666) < 10) {
                    this.method_rn_c_a_12(3);
                } else if(666 < this.field_rn_c_int_21) {
                    this.method_rn_c_a_12(0);
                } else if(666 > this.field_rn_c_int_21) {
                    this.method_rn_c_a_12(1);
                }
            } else if(Math.abs(this.field_rn_c_int_21 - var2 - var1) < 10) {
                this.method_rn_c_a_12(3);
            } else if(var2 + var1 < this.field_rn_c_int_21) {
                this.method_rn_c_a_12(0);
            } else if(var2 + var1 > this.field_rn_c_int_21) {
                this.method_rn_c_a_12(1);
            }
            if((this.field_rn_c_int_21 <= 900 || Math.random() >= 0.4) && var2 >= 620 && (this.field_rn_c_else_14 >= 130 || this.field_rn_c_if_16 >= 0) && (!this.field_rn_c_f_26 || Math.random() >= 0.6)) {
                if((this.field_rn_c_int_21 >= 900 && this.field_rn_c_void_13 > 830 || this.field_rn_c_int_21 <= 580 && this.field_rn_c_void_13 < 530) && Math.abs(this.field_rn_c_void_13 - this.field_rn_c_int_21) < 100) {
                    this.method_rn_c_a_12(2);
                } else if(this.method_rn_b_for_51(this.field_rn_c_void_13 - this.field_rn_c_int_21) * 2 + this.method_rn_b_for_51(this.field_rn_c_else_14 - this.field_rn_c_for_22) < this.method_rn_b_for_51(185) && this.field_rn_c_void_13 !== this.field_rn_c_int_21) {
                    this.method_rn_c_a_12(2);
                } else if(this.field_rn_c_do_15 * this.field_rn_c_do_15 + this.field_rn_c_if_16 * this.field_rn_c_if_16 < 20 && this.field_rn_c_void_13 - this.field_rn_c_int_21 < 30 && this.field_rn_c_void_13 !== this.field_rn_c_int_21) {
                    this.method_rn_c_a_12(2);
                } else if(Math.abs(this.field_rn_c_void_13 - this.field_rn_c_int_21) < (this.field_rn_c_f_26?135:150) && this.field_rn_c_else_14 > 50 && this.field_rn_c_else_14 < 250) {
                    this.method_rn_c_a_12(2);
                }
            }
        } else {
            this.method_rn_b_do_55();
        }
    }

    /*public*/ method_rn_b_for_51(var1 )  {
        return var1 * var1;
    }

    /*public*/ method_rn_b_do_52(var1 )  {
        let var2  = 0;
        let var3  = this.field_rn_c_else_14;
        let var4  = this.field_rn_c_if_16;
        while((true)) {
            --var4;
            if((var3 += var4) <= 0) {
                return var2;
            }
            ++var2;
        };
    }

    /*public*/ method_rn_b_if_53(var1 )  {
        let var2  = this.field_rn_c_void_13;
        let var3  = this.field_rn_c_else_14;
        let var4  = this.field_rn_c_if_16;
        while((true)) {
            --var4;
            if((var3 += var4) <= var1) {
                return var2;
            }
            var2 += this.field_rn_c_do_15;
            if(var2 <= 0) {
                var2 = 0;
                this.field_rn_c_do_15 = -this.field_rn_c_do_15;
            } else if(var2 >= 1000) {
                var2 = 1000;
                this.field_rn_c_do_15 = -this.field_rn_c_do_15;
            }
        };
    }

    /*public*/ method_rn_b_for_54()  {
        let var1  = this.field_rn_c_int_21 - this.field_rn_c_void_13;
        let var2  = this.field_rn_c_for_22 - this.field_rn_c_else_14;
        return (Math.sqrt((var1 * var1 + var2 * var2))|0);
    }

    /*public*/ method_rn_b_do_55() {
        if(this.field_rn_b_h_57 === -1) {
            if(Math.random() < 0.3) {
                if(this.field_rn_c_g_17 < 300 && !this.field_rn_c_f_26) {
                    this.field_rn_b_h_57 = 0;
                } else if(this.field_rn_c_g_17 > 200) {
                    this.field_rn_b_h_57 = 1;
                } else {
                    this.field_rn_b_h_57 = 2;
                }
            } else {
                this.field_rn_b_h_57 = 2;
            }
            if(this.field_rn_b_h_57 === -1 || Math.random() < 0.3) {
                this.field_rn_b_h_57 = ((Math.random() * 3.0)|0);
            }
            if(this.field_rn_c_f_26 && this.field_rn_b_h_57 === 0) {
                this.field_rn_b_h_57 = 1 + ((Math.random() * 2.0)|0);
            }
        }
        let var1 ;
        switch((this.field_rn_b_h_57)) {
        case 0:
        case 1:
            let var2  = this.field_rn_b_h_57 === 0?860:840;
            if(this.field_rn_c_if_16 > 12 && this.field_rn_c_int_21 < var2) {
                this.method_rn_c_a_12(1);
            }
            if(this.field_rn_c_int_21 >= var2) {
                this.method_rn_c_a_12(3);
            }
            if(this.field_rn_c_if_16 === -3 && this.field_rn_c_int_21 !== 800) {
                this.method_rn_c_a_12(2);
            }
            if(this.field_rn_c_if_16 < -12 && this.field_rn_c_for_22 !== 0 && this.field_rn_c_int_21 >= var2 - 15 && this.field_rn_b_h_57 === 0) {
                this.method_rn_c_a_12(0);
            }
            if(this.field_rn_c_void_13 < 700) {
                this.field_rn_b_h_57 = -1;
            }
            break;
        case 2:
            let var3  = 770;
            if(this.field_rn_c_if_16 > 12 && this.field_rn_c_int_21 > var3) {
                this.method_rn_c_a_12(0);
            }
            if(this.field_rn_c_int_21 <= var3) {
                this.method_rn_c_a_12(3);
            }
            if(this.field_rn_c_if_16 === -2 && this.field_rn_c_int_21 !== 800) {
                this.method_rn_c_a_12(2);
            }
            if(this.field_rn_c_for_22 !== 0 && this.field_rn_c_void_13 > 800) {
                this.field_rn_b_h_57 = 3 + this.method_rn_b_if_56();
            }
            break;
        case 3:
            var1 = !this.field_rn_c_f_26?585:555;
            if(this.field_rn_c_int_21 > var1) {
                this.method_rn_c_a_12(0);
            }
            if(this.field_rn_c_int_21 <= var1) {
                this.method_rn_c_a_12(3);
            }
            if(this.field_rn_c_void_13 <= (!this.field_rn_c_f_26?730:740)) {
                this.method_rn_c_a_12(2);
            }
            if(this.field_rn_c_void_13 < 540) {
                this.field_rn_b_h_57 = -1;
            }
            break;
        case 4:
            var1 = !this.field_rn_c_f_26?585:555;
            if(this.field_rn_c_int_21 > var1) {
                this.method_rn_c_a_12(0);
            }
            if(this.field_rn_c_int_21 <= var1) {
                this.method_rn_c_a_12(3);
            }
            if(this.field_rn_c_void_13 <= (!this.field_rn_c_f_26?730:700)) {
                this.method_rn_c_a_12(2);
            }
            if(this.field_rn_c_void_13 < 600) {
                this.method_rn_c_a_12(1);
            }
            if(this.field_rn_c_void_13 < 580) {
                this.method_rn_c_a_12(3);
            }
            if(this.field_rn_c_void_13 < 540) {
                this.field_rn_b_h_57 = -1;
            }
        }
    }

    /*public*/ method_rn_b_if_56()  {
        let var1  = false;
        if(this.field_rn_c_g_17 < 200) {
            var1 = Math.random() < 0.7;
        } else if(this.field_rn_c_g_17 > 300) {
            var1 = Math.random() < 0.3;
        } else {
            var1 = Math.random() < 0.5;
        }
        return var1?1:0;
    }
}

class Class_rn_a_6 extends Class_rn_c_1 {
    /*public*/ field_rn_a_o_64  = -1;

    method_rn_c_a_11() {
        if(this.field_rn_a_o_64 === -1 && (this.field_rn_c_void_13 !== 800 || this.field_rn_c_do_15 !== 0)) {
            let var2  = this.method_rn_a_void_60(this.field_rn_c_for_22 + this.field_rn_c_b_24 + 30);
            let var1 ;
            if(var2 < 600) {
                var1 = 0;
            } else if(var2 < 700) {
                var1 = 10;
            } else {
                var1 = 20;
            }
            if(var2 < 450) {
                if(Math.abs(this.field_rn_c_int_21 - 666) < 10) {
                    this.method_rn_c_a_12(3);
                } else if(666 < this.field_rn_c_int_21) {
                    this.method_rn_c_a_12(0);
                } else if(666 > this.field_rn_c_int_21) {
                    this.method_rn_c_a_12(1);
                }
            } else if(Math.abs(this.field_rn_c_int_21 - var2 - var1) < 10) {
                this.method_rn_c_a_12(3);
            } else if(var2 + var1 < this.field_rn_c_int_21) {
                this.method_rn_c_a_12(0);
            } else if(var2 + var1 > this.field_rn_c_int_21) {
                this.method_rn_c_a_12(1);
            }
            if((this.field_rn_c_int_21 <= 900 || Math.random() >= 0.4) && var2 >= 720 && (this.field_rn_c_else_14 >= 150 || this.field_rn_c_if_16 <= -3)) {
                if((this.field_rn_c_int_21 >= 900 && this.field_rn_c_void_13 > 830 || this.field_rn_c_int_21 <= 580 && this.field_rn_c_void_13 < 530) && Math.abs(this.field_rn_c_void_13 - this.field_rn_c_int_21) < 100) {
                    this.method_rn_c_a_12(2);
                } else if(this.method_rn_a_c_58(this.field_rn_c_void_13 - this.field_rn_c_int_21) * 2 + this.method_rn_a_c_58(this.field_rn_c_else_14 - this.field_rn_c_for_22) < this.method_rn_a_c_58(185) && this.field_rn_c_void_13 !== this.field_rn_c_int_21) {
                    this.method_rn_c_a_12(2);
                } else if(this.field_rn_c_do_15 * this.field_rn_c_do_15 + this.field_rn_c_if_16 * this.field_rn_c_if_16 < 20 && this.field_rn_c_void_13 - this.field_rn_c_int_21 < 30 && this.field_rn_c_void_13 !== this.field_rn_c_int_21) {
                    this.method_rn_c_a_12(2);
                } else if(Math.abs(this.field_rn_c_void_13 - this.field_rn_c_int_21) < 150 && this.field_rn_c_else_14 > 50 && this.field_rn_c_else_14 < 250) {
                    this.method_rn_c_a_12(2);
                }
            }
        } else {
            this.method_rn_a_case_62();
        }
    }

    /*public*/ method_rn_a_c_58(var1 )  {
        return var1 * var1;
    }

    /*public*/ method_rn_a_b_59(var1 )  {
        let var2  = 0;
        let var3  = this.field_rn_c_else_14;
        let var4  = this.field_rn_c_if_16;
        while((true)) {
            --var4;
            if((var3 += var4) <= 0) {
                return var2;
            }
            ++var2;
        };
    }

    /*public*/ method_rn_a_void_60(var1 )  {
        let var2  = this.field_rn_c_void_13;
        let var3  = this.field_rn_c_else_14;
        let var4  = this.field_rn_c_if_16;
        while((true)) {
            --var4;
            if((var3 += var4) <= var1) {
                return var2;
            }
            var2 += this.field_rn_c_do_15;
            if(var2 <= 0) {
                var2 = 0;
                this.field_rn_c_do_15 = -this.field_rn_c_do_15;
            } else if(var2 >= 1000) {
                var2 = 1000;
                this.field_rn_c_do_15 = -this.field_rn_c_do_15;
            }
        };
    }

    /*public*/ method_rn_a_char_61()  {
        let var1  = this.field_rn_c_int_21 - this.field_rn_c_void_13;
        let var2  = this.field_rn_c_for_22 - this.field_rn_c_else_14;
        return (Math.sqrt((var1 * var1 + var2 * var2))|0);
    }

    /*public*/ method_rn_a_case_62() {
        if(this.field_rn_a_o_64 === -1) {
            if(Math.random() < 0.3) {
                if(this.field_rn_c_g_17 < 300) {
                    this.field_rn_a_o_64 = 0;
                } else if(this.field_rn_c_g_17 > 200) {
                    this.field_rn_a_o_64 = 1;
                } else {
                    this.field_rn_a_o_64 = 2;
                }
            } else {
                this.field_rn_a_o_64 = 2;
            }
            if(this.field_rn_a_o_64 === -1 || Math.random() < 0.3) {
                this.field_rn_a_o_64 = ((Math.random() * 3.0)|0);
            }
        }
        let var1 ;
        switch((this.field_rn_a_o_64)) {
        case 0:
        case 1:
            let var2  = this.field_rn_a_o_64 === 0?860:840;
            if(this.field_rn_c_if_16 > 12 && this.field_rn_c_int_21 < var2) {
                this.method_rn_c_a_12(1);
            }
            if(this.field_rn_c_int_21 >= var2) {
                this.method_rn_c_a_12(3);
            }
            if(this.field_rn_c_if_16 === -3 && this.field_rn_c_int_21 !== 800) {
                this.method_rn_c_a_12(2);
            }
            if(this.field_rn_c_if_16 < -12 && this.field_rn_c_for_22 !== 0 && this.field_rn_c_int_21 >= var2 - 15 && this.field_rn_a_o_64 === 0) {
                this.method_rn_c_a_12(0);
            }
            if(this.field_rn_c_void_13 < 700) {
                this.field_rn_a_o_64 = -1;
            }
            break;
        case 2:
            var1 = 770;
            if(this.field_rn_c_if_16 > 12 && this.field_rn_c_int_21 > var1) {
                this.method_rn_c_a_12(0);
            }
            if(this.field_rn_c_int_21 <= var1) {
                this.method_rn_c_a_12(3);
            }
            if(this.field_rn_c_if_16 === -2 && this.field_rn_c_int_21 !== 800) {
                this.method_rn_c_a_12(2);
            }
            if(this.field_rn_c_for_22 !== 0 && this.field_rn_c_void_13 > 800) {
                this.field_rn_a_o_64 = 3 + this.method_rn_a_byte_63();
            }
            break;
        case 3:
            var1 = 585;
            if(this.field_rn_c_int_21 > var1) {
                this.method_rn_c_a_12(0);
            }
            if(this.field_rn_c_int_21 <= var1) {
                this.method_rn_c_a_12(3);
            }
            if(this.field_rn_c_void_13 <= 730) {
                this.method_rn_c_a_12(2);
            }
            if(this.field_rn_c_void_13 < 600) {
                this.method_rn_c_a_12(1);
            }
            if(this.field_rn_c_void_13 < 580) {
                this.method_rn_c_a_12(3);
            }
            if(this.field_rn_c_void_13 < 540) {
                this.field_rn_a_o_64 = -1;
            }
        case 4:
            var1 = 585;
            if(this.field_rn_c_int_21 > var1) {
                this.method_rn_c_a_12(0);
            }
            if(this.field_rn_c_int_21 <= var1) {
                this.method_rn_c_a_12(3);
            }
            if(this.field_rn_c_void_13 <= 755) {
                this.method_rn_c_a_12(2);
            }
            if(this.field_rn_c_void_13 < 600) {
                this.method_rn_c_a_12(1);
            }
            if(this.field_rn_c_void_13 < 580) {
                this.method_rn_c_a_12(3);
            }
            if(this.field_rn_c_void_13 < 540) {
                this.field_rn_a_o_64 = -1;
            }
        }
    }

    /*public*/ method_rn_a_byte_63()  {
        let var1  = 0;
        if(this.field_rn_c_g_17 < 200) {
            var1 = 1;
        } else if(this.field_rn_c_g_17 > 300) {
            var1 = 0;
        }
        if(Math.random() < 0.35) {
            var1 = 1 - var1;
        }
        return var1;
    }
}
class OriginalSlimeBot {
 constructor(level){this.level=level;this.direction=0;this.jump=false;const Type=[Class_rn_d_4,Class_rn_e_3,Class_rn_b_5,Class_rn_b_5,Class_rn_a_6][level];this.brain=new Type();this.brain.field_rn_c_c_27=2;this.brain.method_rn_c_a_12=action=>{if(action===0)this.direction=-1;if(action===1)this.direction=1;if(action===3)this.direction=0;if(action===2)this.jump=true;};}
 input(world){this.jump=false;const b=world.ball,p=world.players;this.brain.method_rn_c_a_10([b.x,b.y,b.vx,b.vy,p[0].x,p[0].y,p[0].vx,p[0].vy,p[1].x,p[1].y,p[1].vx,p[1].vy],false,this.level===3);this.brain.method_rn_c_a_11();return {left:this.direction<0,right:this.direction>0,jump:this.jump,duck:false};}
}
if(typeof module!=='undefined')module.exports=OriginalSlimeBot;




