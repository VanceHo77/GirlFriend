package com.vance.girlfriend.model.entity

import java.time.LocalDateTime
import javax.persistence.*


@Entity
@Table(name = "AdminUser", indexes = arrayOf(Index(name = "accountIdx", columnList = "account"),
        Index(name = "modifyTimeIdx", columnList = "modifyTime")))
data class AdminUserEntity(
        @Id @GeneratedValue(strategy = GenerationType.AUTO) var id: Long? = 1,
        var name: String? = null,
        var email: String? = null,
        var account: String? = null,
        var password: String? = null,
        var modifyTime: LocalDateTime? = LocalDateTime.now(),
        var createTime: LocalDateTime? = LocalDateTime.now())