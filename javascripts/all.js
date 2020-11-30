
var app = angular.module('theme', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('theme', {
                url: "/:slug",
                controller: 'ThemeController',
                params: {
                    slug: { value: 'dark_amber' }
                }
            });
        $urlRouterProvider.otherwise('/dark_amber');
    }]);

app.controller('ThemeController', ['$scope', '$stateParams', '$state', '$location',
    function($scope, $stateParams, $state, $location) {
        var themes = {
          'dark_amber' : { colors: '#212121,#212121,#FFC107,#212121,#FFC107,#FFFFFF,#FFC107,#FFC107', name: 'Amber' },
'dark_blue' : { colors: '#212121,#212121,#2196F3,#FFFFFF,#2196F3,#FFFFFF,#2196F3,#2196F3', name: 'Blue' },
'dark_blue_grey' : { colors: '#212121,#212121,#607D8B,#FFFFFF,#607D8B,#FFFFFF,#607D8B,#607D8B', name: 'Blue Grey' },
'dark_brown' : { colors: '#212121,#212121,#795548,#FFFFFF,#795548,#FFFFFF,#795548,#795548', name: 'Brown' },
'dark_cyan' : { colors: '#212121,#212121,#00BCD4,#212121,#00BCD4,#FFFFFF,#00BCD4,#00BCD4', name: 'Cyan' },
'dark_deep_orange' : { colors: '#212121,#212121,#FF5722,#FFFFFF,#FF5722,#FFFFFF,#FF5722,#FF5722', name: 'Deep Orange' },
'dark_deep_purple' : { colors: '#212121,#212121,#673AB7,#FFFFFF,#673AB7,#FFFFFF,#673AB7,#673AB7', name: 'Deep Purple' },
'dark_green' : { colors: '#212121,#212121,#4CAF50,#212121,#4CAF50,#FFFFFF,#4CAF50,#4CAF50', name: 'Green' },
'dark_grey' : { colors: '#212121,#212121,#9E9E9E,#212121,#9E9E9E,#FFFFFF,#9E9E9E,#9E9E9E', name: 'Grey' },
'dark_indigo' : { colors: '#212121,#212121,#3F51B5,#FFFFFF,#3F51B5,#FFFFFF,#3F51B5,#3F51B5', name: 'Indigo' },
'dark_light_blue' : { colors: '#212121,#212121,#03A9F4,#212121,#03A9F4,#FFFFFF,#03A9F4,#03A9F4', name: 'Light Blue' },
'dark_light_green' : { colors: '#212121,#212121,#8BC34A,#212121,#8BC34A,#FFFFFF,#4CAF50,#8BC34A', name: 'Light Green' },
'dark_lime' : { colors: '#212121,#212121,#CDDC39,#212121,#CDDC39,#FFFFFF,#CDDC39,#CDDC39', name: 'Lime' },
'dark_orange' : { colors: '#212121,#212121,#FF9800,#212121,#FF9800,#FFFFFF,#FF9800,#FF9800', name: 'Orange' },
'dark_pink' : { colors: '#212121,#212121,#E91E63,#FFFFFF,#E91E63,#FFFFFF,#E91E63,#E91E63', name: 'Pink' },
'dark_purple' : { colors: '#212121,#212121,#9C27B0,#FFFFFF,#9C27B0,#FFFFFF,#9C27B0,#9C27B0', name: 'Purple' },
'dark_red' : { colors: '#212121,#212121,#F44336,#FFFFFF,#F44336,#FFFFFF,#F44336,#F44336', name: 'Red' },
'dark_teal' : { colors: '#212121,#212121,#009688,#FFFFFF,#009688,#FFFFFF,#009688,#009688', name: 'Teal' },
'dark_white' : { colors: '#212121,#212121,#FFFFFF,#212121,#FFFFFF,#FFFFFF,#FFFFFF,#FFFFFF', name: 'White' },
'dark_yellow' : { colors: '#212121,#212121,#FFEB3B,#212121,#FFEB3B,#FFFFFF,#FFEB3B,#FFEB3B', name: 'Yellow' },
'dark_amber_300' : { colors: '#212121,#212121,#FFD54F,#212121,#FFD54F,#FFFFFF,#FFD54F,#FFD54F', name: 'Amber' },
'dark_blue_300' : { colors: '#212121,#212121,#64B5F6,#212121,#64B5F6,#FFFFFF,#64B5F6,#64B5F6', name: 'Blue' },
'dark_blue_grey_300' : { colors: '#212121,#212121,#90A4AE,#212121,#90A4AE,#FFFFFF,#90A4AE,#90A4AE', name: 'Blue Grey' },
'dark_brown_300' : { colors: '#212121,#212121,#A1887F,#212121,#A1887F,#FFFFFF,#A1887F,#A1887F', name: 'Brown' },
'dark_cyan_300' : { colors: '#212121,#212121,#4DD0E1,#212121,#4DD0E1,#FFFFFF,#4DD0E1,#4DD0E1', name: 'Cyan' },
'dark_deep_orange_300' : { colors: '#212121,#212121,#FF8A65,#212121,#FF8A65,#FFFFFF,#FF8A65,#FF8A65', name: 'Deep Orange' },
'dark_deep_purple_300' : { colors: '#212121,#212121,#9575CD,#FFFFFF,#9575CD,#FFFFFF,#9575CD,#9575CD', name: 'Deep Purple ' },
'dark_green_300' : { colors: '#212121,#212121,#81C784,#212121,#81C784,#FFFFFF,#81C784,#81C784', name: 'Green' },
'dark_grey_300' : { colors: '#212121,#212121,#E0E0E0,#212121,#E0E0E0,#FFFFFF,#E0E0E0,#E0E0E0', name: 'Grey' },
'dark_indigo_300' : { colors: '#212121,#212121,#7986CB,#FFFFFF,#7986CB,#FFFFFF,#7986CB,#7986CB', name: 'Indigo' },
'dark_light_blue_300' : { colors: '#212121,#212121,#4FC3F7,#212121,#4FC3F7,#FFFFFF,#4FC3F7,#4FC3F7', name: 'Light Blue' },
'dark_light_green_300' : { colors: '#212121,#212121,#AED581,#212121,#AED581,#FFFFFF,#AED581,#AED581', name: 'Light Green' },
'dark_lime_300' : { colors: '#212121,#212121,#DCE775,#212121,#DCE775,#FFFFFF,#DCE775,#DCE775', name: 'Lime' },
'dark_orange_300' : { colors: '#212121,#212121,#FFB74D,#212121,#FFB74D,#FFFFFF,#FFB74D,#FFB74D', name: 'Orange' },
'dark_pink_300' : { colors: '#212121,#212121,#F06292,#FFFFFF,#F06292,#FFFFFF,#F06292,#F06292', name: 'Pink' },
'dark_purple_300' : { colors: '#212121,#212121,#BA68C8,#FFFFFF,#BA68C8,#FFFFFF,#BA68C8,#BA68C8', name: 'Purple' },
'dark_red_300' : { colors: '#212121,#212121,#E57373,#212121,#E57373,#FFFFFF,#E57373,#E57373', name: 'Red' },
'dark_teal_300' : { colors: '#212121,#212121,#4DB6AC,#212121,#4DB6AC,#FFFFFF,#4DB6AC,#4DB6AC', name: 'Teal' },
'dark_yellow_300' : { colors: '#212121,#212121,#FFF176,#212121,#FFF176,#FFFFFF,#FFF176,#FFF176', name: 'Yellow' },
'dark_amber_700' : { colors: '#212121,#212121,#FFA000,#212121,#FFA000,#FFFFFF,#FFA000,#FFA000', name: 'Amber' },
'dark_blue_700' : { colors: '#212121,#212121,#1976D2,#FFFFFF,#1976D2,#FFFFFF,#1976D2,#1976D2', name: 'Blue' },
'dark_blue_grey_700' : { colors: '#212121,#212121,#455A64,#FFFFFF,#455A64,#FFFFFF,#455A64,#455A64', name: 'Blue Grey' },
'dark_brown_700' : { colors: '#212121,#212121,#3E2723,#FFFFFF,#3E2723,#FFFFFF,#3E2723,#3E2723', name: 'Brown' },
'dark_cyan_700' : { colors: '#212121,#212121,#0097A7,#FFFFFF,#0097A7,#FFFFFF,#0097A7,#0097A7', name: 'Cyan' },
'dark_deep_orange_700' : { colors: '#212121,#212121,#5D4037,#FFFFFF,#5D4037,#FFFFFF,#5D4037,#5D4037', name: 'Deep Orange' },
'dark_deep_purple_700' : { colors: '#212121,#212121,#512DA8,#FFFFFF,#512DA8,#FFFFFF,#512DA8,#512DA8', name: 'Deep Purple' },
'dark_green_700' : { colors: '#212121,#212121,#388E3C,#FFFFFF,#388E3C,#FFFFFF,#388E3C,#388E3C', name: 'Green' },
'dark_grey_700' : { colors: '#212121,#212121,#616161,#FFFFFF,#616161,#FFFFFF,#616161,#616161', name: 'Grey' },
'dark_indigo_700' : { colors: '#212121,#212121,#303F9F,#FFFFFF,#303F9F,#FFFFFF,#303F9F,#303F9F', name: 'Indigo' },
'dark_light_blue_700' : { colors: '#212121,#212121,#0288D1,#FFFFFF,#0288D1,#FFFFFF,#0288D1,#0288D1', name: 'Light Blue' },
'dark_light_green_700' : { colors: '#212121,#212121,#689F38,#FFFFFF,#689F38,#FFFFFF,#689F38,#689F38', name: 'Light Green' },
'dark_lime_700' : { colors: '#212121,#212121,#AFB42B,#212121,#AFB42B,#FFFFFF,#AFB42B,#AFB42B', name: 'Lime' },
'dark_orange_700' : { colors: '#212121,#212121,#F57C00,#212121,#F57C00,#FFFFFF,#F57C00,#F57C00', name: 'Orange' },
'dark_pink_700' : { colors: '#212121,#212121,#C2185B,#FFFFFF,#C2185B,#FFFFFF,#C2185B,#C2185B', name: 'Pink' },
'dark_purple_700' : { colors: '#212121,#212121,#7B1FA2,#FFFFFF,#7B1FA2,#FFFFFF,#7B1FA2,#7B1FA2', name: 'Purple' },
'dark_red_700' : { colors: '#212121,#212121,#D32F2F,#FFFFFF,#D32F2F,#FFFFFF,#D32F2F,#D32F2F', name: 'Red' },
'dark_teal_700' : { colors: '#212121,#212121,#00796B,#FFFFFF,#00796B,#FFFFFF,#00796B,#00796B', name: 'Teal' },
'dark_yellow_700' : { colors: '#212121,#212121,#FBC02D,#212121,#FBC02D,#FFFFFF,#FBC02D,#FBC02D', name: 'Yellow' },
'light_amber' : { colors: '#FFFFFF,#FFFFFF,#FFC107,#212121,#FFC107,#212121,#FFC107,#FFC107', name: 'Amber' },
'light_black' : { colors: '#FFFFFF,#FFFFFF,#000000,#FFFFFF,#000000,#212121,#000000,#000000', name: 'Black' },
'light_blue' : { colors: '#FFFFFF,#FFFFFF,#2196F3,#FFFFFF,#2196F3,#212121,#2196F3,#2196F3', name: 'Blue' },
'light_blue_grey' : { colors: '#FFFFFF,#FFFFFF,#607D8B,#FFFFFF,#607D8B,#212121,#607D8B,#607D8B', name: 'Blue Grey' },
'light_brown' : { colors: '#FFFFFF,#FFFFFF,#795548,#FFFFFF,#795548,#212121,#795548,#795548', name: 'Brown' },
'light_cyan' : { colors: '#FFFFFF,#FFFFFF,#00BCD4,#212121,#00BCD4,#212121,#00BCD4,#00BCD4', name: 'Cyan' },
'light_deep_orange' : { colors: '#FFFFFF,#FFFFFF,#FF5722,#FFFFFF,#FF5722,#212121,#FF5722,#FF5722', name: 'Deep Orange' },
'light_deep_purple' : { colors: '#FFFFFF,#FFFFFF,#673AB7,#FFFFFF,#673AB7,#212121,#673AB7,#673AB7', name: 'Deep Purple' },
'light_green' : { colors: '#FFFFFF,#FFFFFF,#4CAF50,#212121,#4CAF50,#212121,#4CAF50,#4CAF50', name: 'Green' },
'light_grey' : { colors: '#FFFFFF,#FFFFFF,#9E9E9E,#212121,#9E9E9E,#212121,#9E9E9E,#9E9E9E', name: 'Grey' },
'light_indigo' : { colors: '#FFFFFF,#FFFFFF,#3F51B5,#FFFFFF,#3F51B5,#212121,#3F51B5,#3F51B5', name: 'Indigo' },
'light_light_blue' : { colors: '#FFFFFF,#FFFFFF,#03A9F4,#212121,#03A9F4,#212121,#03A9F4,#03A9F4', name: 'Light Blue' },
'light_light_green' : { colors: '#FFFFFF,#FFFFFF,#8BC34A,#212121,#8BC34A,#212121,#4CAF50,#8BC34A', name: 'Light Green' },
'light_lime' : { colors: '#FFFFFF,#FFFFFF,#CDDC39,#212121,#CDDC39,#212121,#CDDC39,#CDDC39', name: 'Lime' },
'light_orange' : { colors: '#FFFFFF,#FFFFFF,#FF9800,#212121,#FF9800,#212121,#FF9800,#FF9800', name: 'Orange' },
'light_pink' : { colors: '#FFFFFF,#FFFFFF,#E91E63,#FFFFFF,#E91E63,#212121,#E91E63,#E91E63', name: 'Pink' },
'light_purple' : { colors: '#FFFFFF,#FFFFFF,#9C27B0,#FFFFFF,#9C27B0,#212121,#9C27B0,#9C27B0', name: 'Purple' },
'light_red' : { colors: '#FFFFFF,#FFFFFF,#F44336,#FFFFFF,#F44336,#212121,#F44336,#F44336', name: 'Red' },
'light_teal' : { colors: '#FFFFFF,#FFFFFF,#009688,#FFFFFF,#009688,#212121,#009688,#009688', name: 'Teal' },
'light_yellow' : { colors: '#FFFFFF,#FFFFFF,#FFEB3B,#212121,#FFEB3B,#212121,#FFEB3B,#FFEB3B', name: 'Yellow' },
'light_amber_300' : { colors: '#FFFFFF,#FFFFFF,#FFD54F,#212121,#FFD54F,#212121,#FFD54F,#FFD54F', name: 'Amber' },
'light_blue_300' : { colors: '#FFFFFF,#FFFFFF,#64B5F6,#212121,#64B5F6,#212121,#64B5F6,#64B5F6', name: 'Blue' },
'light_blue_grey_300' : { colors: '#FFFFFF,#FFFFFF,#90A4AE,#212121,#90A4AE,#212121,#90A4AE,#90A4AE', name: 'Blue Grey' },
'light_brown_300' : { colors: '#FFFFFF,#FFFFFF,#A1887F,#212121,#A1887F,#212121,#A1887F,#A1887F', name: 'Brown' },
'light_cyan_300' : { colors: '#FFFFFF,#FFFFFF,#4DD0E1,#212121,#4DD0E1,#212121,#4DD0E1,#4DD0E1', name: 'Cyan' },
'light_deep_orange_300' : { colors: '#FFFFFF,#FFFFFF,#FF8A65,#212121,#FF8A65,#212121,#FF8A65,#FF8A65', name: 'Deep Orange' },
'light_deep_purple_300' : { colors: '#FFFFFF,#FFFFFF,#9575CD,#FFFFFF,#9575CD,#212121,#9575CD,#9575CD', name: 'Deep Purple' },
'light_green_300' : { colors: '#FFFFFF,#FFFFFF,#81C784,#212121,#81C784,#212121,#81C784,#81C784', name: 'Green' },
'light_grey_300' : { colors: '#FFFFFF,#FFFFFF,#E0E0E0,#212121,#E0E0E0,#212121,#E0E0E0,#E0E0E0', name: 'Grey' },
'light_indigo_300' : { colors: '#FFFFFF,#FFFFFF,#7986CB,#FFFFFF,#7986CB,#212121,#7986CB,#7986CB', name: 'Indigo' },
'light_light_blue_300' : { colors: '#FFFFFF,#FFFFFF,#4FC3F7,#212121,#4FC3F7,#212121,#4FC3F7,#4FC3F7', name: 'Light Blue' },
'light_light_green_300' : { colors: '#FFFFFF,#FFFFFF,#AED581,#212121,#AED581,#212121,#AED581,#AED581', name: 'Light Green' },
'light_lime_300' : { colors: '#FFFFFF,#FFFFFF,#DCE775,#212121,#DCE775,#212121,#DCE775,#DCE775', name: 'Lime' },
'light_orange_300' : { colors: '#FFFFFF,#FFFFFF,#FFB74D,#212121,#FFB74D,#212121,#FFB74D,#FFB74D', name: 'Orange' },
'light_pink_300' : { colors: '#FFFFFF,#FFFFFF,#F06292,#FFFFFF,#F06292,#212121,#F06292,#F06292', name: 'Pink' },
'light_purple_300' : { colors: '#FFFFFF,#FFFFFF,#BA68C8,#FFFFFF,#BA68C8,#212121,#BA68C8,#BA68C8', name: 'Purple' },
'light_red_300' : { colors: '#FFFFFF,#FFFFFF,#E57373,#212121,#E57373,#212121,#E57373,#E57373', name: 'Red' },
'light_teal_300' : { colors: '#FFFFFF,#FFFFFF,#4DB6AC,#212121,#4DB6AC,#212121,#4DB6AC,#4DB6AC', name: 'Teal' },
'light_yellow_300' : { colors: '#FFFFFF,#FFFFFF,#FFF176,#212121,#FFF176,#212121,#FFF176,#FFF176', name: 'Yellow' },
'light_amber_700' : { colors: '#FFFFFF,#FFFFFF,#FFA000,#212121,#FFA000,#212121,#FFA000,#FFA000', name: 'Amber' },
'light_blue_700' : { colors: '#FFFFFF,#FFFFFF,#1976D2,#FFFFFF,#1976D2,#212121,#1976D2,#1976D2', name: 'Blue' },
'light_blue_grey_700' : { colors: '#FFFFFF,#FFFFFF,#455A64,#FFFFFF,#455A64,#212121,#455A64,#455A64', name: 'Blue Grey' },
'light_brown_700' : { colors: '#FFFFFF,#FFFFFF,#3E2723,#FFFFFF,#3E2723,#212121,#3E2723,#3E2723', name: 'Brown' },
'light_cyan_700' : { colors: '#FFFFFF,#FFFFFF,#0097A7,#FFFFFF,#0097A7,#212121,#0097A7,#0097A7', name: 'Cyan' },
'light_deep_orange_700' : { colors: '#FFFFFF,#FFFFFF,#5D4037,#FFFFFF,#5D4037,#212121,#5D4037,#5D4037', name: 'Deep Orange' },
'light_deep_purple_700' : { colors: '#FFFFFF,#FFFFFF,#512DA8,#FFFFFF,#512DA8,#212121,#512DA8,#512DA8', name: 'Deep Purple' },
'light_green_700' : { colors: '#FFFFFF,#FFFFFF,#388E3C,#FFFFFF,#388E3C,#212121,#388E3C,#388E3C', name: 'Green' },
'light_grey_700' : { colors: '#FFFFFF,#FFFFFF,#616161,#FFFFFF,#616161,#212121,#616161,#616161', name: 'Grey' },
'light_indigo_700' : { colors: '#FFFFFF,#FFFFFF,#303F9F,#FFFFFF,#303F9F,#212121,#303F9F,#303F9F', name: 'Indigo' },
'light_light_blue_700' : { colors: '#FFFFFF,#FFFFFF,#0288D1,#FFFFFF,#0288D1,#212121,#0288D1,#0288D1', name: 'Light Blue' },
'light_light_green_700' : { colors: '#FFFFFF,#FFFFFF,#689F38,#FFFFFF,#689F38,#212121,#689F38,#689F38', name: 'Light Green' },
'light_lime_700' : { colors: '#FFFFFF,#FFFFFF,#AFB42B,#212121,#AFB42B,#212121,#AFB42B,#AFB42B', name: 'Lime' },
'light_orange_700' : { colors: '#FFFFFF,#FFFFFF,#F57C00,#212121,#F57C00,#212121,#F57C00,#F57C00', name: 'Orange' },
'light_pink_700' : { colors: '#FFFFFF,#FFFFFF,#C2185B,#FFFFFF,#C2185B,#212121,#C2185B,#C2185B', name: 'Pink' },
'light_purple_700' : { colors: '#FFFFFF,#FFFFFF,#7B1FA2,#FFFFFF,#7B1FA2,#212121,#7B1FA2,#7B1FA2', name: 'Purple' },
'light_red_700' : { colors: '#FFFFFF,#FFFFFF,#D32F2F,#FFFFFF,#D32F2F,#212121,#D32F2F,#D32F2F', name: 'Red' },
'light_teal_700' : { colors: '#FFFFFF,#FFFFFF,#00796B,#FFFFFF,#00796B,#212121,#00796B,#00796B', name: 'Teal' },
'light_yellow_700' : { colors: '#FFFFFF,#FFFFFF,#FBC02D,#212121,#FBC02D,#212121,#FBC02D,#FBC02D', name: 'Yellow' },
'solid_amber' : { colors: '#FFC107,#FFA000,#FFA000,#212121,#FFA000,#212121,#B2FF59,#FFA000', name: 'Amber' },
'solid_blue' : { colors: '#2196F3,#1976D2,#1976D2,#FFFFFF,#1976D2,#FFFFFF,#B2FF59,#90CAF9', name: 'Blue' },
'solid_blue_grey' : { colors: '#607D8B,#546E7A,#90A4AE,#FFFFFF,#455A64,#FFFFFF,#B2FF59,#B0BEC5', name: 'Blue Grey' },
'solid_brown' : { colors: '#795548,#5D4037,#5D4037,#FFFFFF,#5D4037,#FFFFFF,#B2FF59,#BCAAA4', name: 'Brown' },
'solid_cyan' : { colors: '#00BCD4,#0097A7,#0097A7,#FFFFFF,#00796B,#FFFFFF,#B2FF59,#80DEEA', name: 'Cyan' },
'solid_deep_orange' : { colors: '#FF5722,#E64A19,#E64A19,#FFFFFF,#E64A19,#FFFFFF,#B2FF59,#FFAB91', name: 'Deep Orange' },
'solid_deep_purple' : { colors: '#673AB7,#512DA8,#7B1FA2,#FFFFFF,#512DA8,#FFFFFF,#B2FF59,#B39DDB', name: 'Deep Purple' },
'solid_green' : { colors: '#4CAF50,#388E3C,#388E3C,#FFFFFF,#388E3C,#FFFFFF,#B2FF59,#A5D6A7', name: 'Green' },
'solid_grey' : { colors: '#9E9E9E,#616161,#616161,#FFFFFF,#616161,#FFFFFF,#B2FF59,#616161', name: 'Grey' },
'solid_indigo' : { colors: '#3F51B5,#303F9F,#303F9F,#FFFFFF,#303F9F,#FFFFFF,#B2FF59,#9FA8DA', name: 'Indigo' },
'solid_light_blue' : { colors: '#03A9F4,#0288D1,#0288D1,#FFFFFF,#0288D1,#FFFFFF,#B2FF59,#81D4FA', name: 'Light Blue' },
'solid_light_green' : { colors: '#8BC34A,#689F38,#689F38,#FFFFFF,#689F38,#FFFFFF,#B2FF59,#C5E1A5', name: 'Light Green' },
'solid_lime' : { colors: '#CDDC39,#AFB42B,#AFB42B,#212121,#AFB42B,#212121,#B2FF59,#616161', name: 'Lime' },
'solid_orange' : { colors: '#FF9800,#F57C00,#F57C00,#FFFFFF,#F57C00,#FFFFFF,#B2FF59,#FFCC80', name: 'Orange' },
'solid_pink' : { colors: '#E91E63,#C2185B,#C2185B,#FFFFFF,#C2185B,#FFFFFF,#B2FF59,#F48FB1', name: 'Pink' },
'solid_purple' : { colors: '#9C27B0,#7B1FA2,#7B1FA2,#FFFFFF,#7B1FA2,#FFFFFF,#B2FF59,#CE93D8', name: 'Purple' },
'solid_red' : { colors: '#D32F2F,#B71C1C,#B71C1C,#FFFFFF,#B71C1C,#FFFFFF,#B2FF59,#EF9A9A', name: 'Red' },
'solid_teal' : { colors: '#009688,#00796B,#00796B,#FFFFFF,#00796B,#FFFFFF,#B2FF59,#80CBC4', name: 'Teal' },
'solid_white' : { colors: '#FFFFFF,#EEEEEE,#EEEEEE,#212121,#EEEEEE,#212121,#B2FF59,#616161', name: 'White' },
'solid_yellow' : { colors: '#FFEB3B,#FBC02D,#FBC02D,#212121,#FBC02D,#212121,#B2FF59,#FBC02D', name: 'Yellow' },
'solid_blue_grey_300' : { colors: '#90A4AE,#78909C,#CFD8DC,#212121,#607D8B,#FFFFFF,#B2FF59,#ECEFF1', name: 'Blue Grey' },
'solid_blue_grey_700' : { colors: '#455A64,#37474F,#546E7A,#FFFFFF,#263238,#FFFFFF,#B2FF59,#78909C', name: 'Blue Grey' }
        };

        $scope.$on('$stateChangeSuccess', function() {
            $scope.slug = $stateParams.slug;
        });

        $scope.$watch('slug', function(slug) {
            if (!slug) {
                $scope.slug = "dark_amber";
                slug = $scope.slug;
            }
            if (slug === 'custom') {
                $scope.colors = $location.hash().split(',').map(function(part) {
                    return '#' + part;
                }).join(',');

                return;
            }
            $scope.colors = themes[$scope.slug].colors;
            $scope.name = themes[$scope.slug].name;
            $state.go('theme', { slug: slug }, { location: 'replace' });
        });

        $scope.$watch('colors', function(colors) {
            if (!colors) {
                return;
            }
            var parts = colors.split(',');
            $scope.column_bg = parts[0];
            $scope.menu_bg = parts[1];
            $scope.active_item = parts[2];
            $scope.active_item_text = parts[3];
            $scope.hover_item = parts[4];
            $scope.text_color = parts[5];
            $scope.active_presence = parts[6];
            $scope.mention_badge = parts[7];
            $scope.team_name = $scope.name;

            function updateHash() {
                $location.hash(parts.map(function(part) {
                    return part.replace('#', '');
                }));
            }

            if ($scope.slug === 'custom') {
                updateHash();
            } else if (colors !== themes[$scope.slug].colors) {
                $state.go('theme', { slug: 'custom' }, { location: 'replace' }).then(updateHash);
            }
        });
    }]);
