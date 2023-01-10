<template>
  <div class="bg-neutral-alt grid gap-1 p-1 break-inside-avoid">
    <table class="border-2 border-neutral">
      <thead>
        <tr>
          <th
            colspan="2"
            class="border-2 border-neutral bg-neutral-secondary-alt"
          >
            <h3 class="text-primary-light">
              {{ server.name }}
            </h3>
          </th>
        </tr>
      </thead>
      <tbody>
        <DescriptionsItem label="描述">
          {{ server.comment }}
        </DescriptionsItem>
        <DescriptionsItem label="国家">
          {{ server.country }}
        </DescriptionsItem>
        <DescriptionsItem label="地图">
          {{
            server.mapName && server.mapName.length > 0
              ? server.mapName
              : server.mapId
          }}
        </DescriptionsItem>
        <tr>
          <td colspan="2">
            <div class="grid grid-cols-2 gap-1">
              <RWRButton
                :href="getInfoUri(`${server.address}:${server.port}`)"
                :icon="faInfo"
              >
                显示服务器详情
              </RWRButton>
              <RWRButton
                :href="getSteamUri(`${server.address}:${server.port}`)"
                :icon="faSteamSymbol"
              >
                加入服务器
              </RWRButton>
            </div>
          </td>
        </tr>
        <tr>
          <th
            colspan="2"
            class="border-2 border-neutral"
          >
            <div
              class="hover:bg-primary hover:border-primary-light"
              :class="{
                'bg-neutral-secondary-alt': showPlayerList,
                'bg-neutral-thertiary': !showPlayerList
              }"
              @click="showPlayerList = !showPlayerList"
            >
              玩家列表({{ server.playerCount }}/{{ server.maxPlayerCount }})
            </div>
          </th>
        </tr>
      </tbody>
      <tfoot v-if="showPlayerList">
        <tr
          v-for="player, index in server.players"
          :key="`${server.address}-${server.port}-${player}`"
        >
          <td
            colspan="2"
            class="border-2 border-neutral"
            :class="{
              'bg-neutral-secondary': (index % 2) !== 0
            }"
          >
            <span class="whitespace-pre">
              {{ player }}
            </span>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script lang="ts" scoped setup>
import { getInfoUri } from '@/rwrstats'
import { ServerInfo } from '@/source.rwr'
import { getSteamUri } from '@/steam'
import { faSteamSymbol } from '@fortawesome/free-brands-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'
import DescriptionsItem from './DescriptionsItem.vue'
import RWRButton from './RWRButton.vue'

const showPlayerList = ref(false)

defineProps<{
  server: Partial<ServerInfo>
}>()

</script>
