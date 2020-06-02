<template>
    <div class="date-picker">
        <v-btn text icon :color="iconColor" @click="updateValue(!value)">
            <v-icon>{{iconDisplay}}</v-icon>
        </v-btn>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: Boolean,
                default: false
            },
            icon: {
                type: String,
                default: 'mdi-heart'
            },
            icon_false: {
                type: String,
                default: null
            },
        },

        methods: {
            updateValue(value) {
                this.$emit('input', value);
                this.signalChange(value);
            },

            signalChange(value) {
                this.$emit('change', value);
            },
        },

        computed:{
            iconColor(){
                return this.value ? 'accent' : 'grey';
            },

            iconDisplay(){
                if(!this.icon_false){
                    return this.icon;
                }

                return this.value ? this.icon : this.icon_false;
            },

        }
    };
</script>