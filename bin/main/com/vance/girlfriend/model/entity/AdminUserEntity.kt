package com.vance.girlfriend.model.entity

import java.time.LocalDate
import javax.persistence.*


@Entity
@Table(name = "AdminUser")
data class AdminUserEntity(
        @Id @GeneratedValue(strategy = GenerationType.AUTO) var id: Long? = 1,
        var name: String? = null,
        var email: String? = null,
        var account: String? = null,
        var password: String? = null,
        var modifyTime: LocalDate? = null,
        var createTime: LocalDate? = null) {
}