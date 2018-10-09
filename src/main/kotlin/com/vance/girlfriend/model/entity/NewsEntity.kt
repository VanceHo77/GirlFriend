package com.vance.girlfriend.model.entity

import java.time.LocalDate
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "News", indexes = [Index(name = "modifyTimeIdx", columnList = "modifyTime")])
data class NewsEntity(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long? = 1,
        var title: String? = null,
        @Lob
        var description: String? = null,
        var author: String? = null,
        var modifyTime: LocalDateTime? = LocalDateTime.now(),
        var createTime: LocalDateTime? = LocalDateTime.now())