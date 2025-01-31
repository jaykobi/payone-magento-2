/**
 * PAYONE Magento 2 Connector is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * PAYONE Magento 2 Connector is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with PAYONE Magento 2 Connector. If not, see <http://www.gnu.org/licenses/>.
 *
 * PHP version 8
 *
 * @category  Payone
 * @package   Payone_Magento2_Plugin
 * @author    FATCHIP GmbH <support@fatchip.de>
 * @copyright 2003 - 2022 Payone GmbH
 * @license   <http://www.gnu.org/licenses/> GNU Lesser General Public License
 * @link      http://www.payone.de
 */
define(
    [
        'Payone_Core/js/view/payment/method-renderer/bnpl_base',
        'Magento_Checkout/js/model/quote',
        'mage/translate'
    ],
    function (Component, quote, $t) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'Payone_Core/payment/bnpl_debit',
                birthday: '',
                birthmonth: '',
                birthyear: '',
                telephone: '',
                bankaccountholder: '',
                iban: ''
            },
            initObservable: function () {
                this._super()
                    .observe([
                        'birthday',
                        'birthmonth',
                        'birthyear',
                        'telephone',
                        'bankaccountholder',
                        'iban'
                    ]);
                return this;
            }
        });
    }
);
