<template>
<div
    w="[485px]" mx-auto break-inside-avoid p-1
    hover:border-primary-light hover:bg-primary
>
  <div v-if="(typeof server === 'string')">
    <h3
        m-0 border-2 border-b-0
        border-neutral bg-neutral-secondary-alt text-center font-bold
        text-primary-light v-text="name"
    />
    <img :src="getImageUri(server)" :alt="name">
    <div
        grid grid-cols-2 gap-1 border-2
        border-t-0 border-neutral bg-neutral-secondary-alt
    >
      <RWRButton :href="getInfoUri(server)">
        <i i-fa6-solid:info />
        显示服务器详情
      </RWRButton>
      <RWRButton :href="getSteamUri(server)">
        <i i-fa6-brands:steam-symbol />
        加入服务器
      </RWRButton>
    </div>
  </div>
  <table
      v-else w-full border-2 border-neutral
      bg-neutral-alt
  >
    <thead>
      <tr>
        <th colspan="2" border-2 border-neutral bg-neutral-secondary-alt>
          <h3 m-0 text-primary-light v-text="name" />
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
          <div grid grid-cols-2 gap-1>
            <RWRButton :href="getInfoUri(`${server.address}:${server.port}`)">
              <i i-fa6-solid:info />
              显示服务器详情
            </RWRButton>
            <RWRButton :href="getSteamUri(`${server.address}:${server.port}`)">
              <i i-fa6-brands:steam-symbol />
              加入服务器
            </RWRButton>
          </div>
        </td>
      </tr>
      <tr>
        <th colspan="2" border-2 border-neutral>
          <div
              hover:border-primary-light hover:bg-primary
              :class="showPlayerList ? 'bg-neutral-secondary-alt' : 'bg-neutral-thertiary'"
              @click="showPlayerList = !showPlayerList"
          >
            玩家列表({{ server.playerCount }}/{{ server.maxPlayerCount }})
          </div>
        </th>
      </tr>
    </tbody>
    <tfoot v-if="showPlayerList">
      <tr v-for="player, index in server.players" :key="`${server.address}-${server.port}-${player}`">
        <td colspan="2" border-2 border-neutral :class="(index % 2) !== 0 ? 'bg-neutral-secondary' : ''">
          <span whitespace-pre v-text="player" />
        </td>
      </tr>
    </tfoot>
  </table>
</div>
</template>

<script lang="ts" scoped setup>
import { getImageUri, getInfoUri, getSteamUri } from '@/apis/servers'
import { ref } from 'vue'
import DescriptionsItem from './DescriptionsItem.vue'
import RWRButton from './RWRButton.vue'

export interface RWRServerTileProps {
  server: RWRModel.Response.Server
  name: string
}

const showPlayerList = ref(false)

defineProps<RWRServerTileProps>()

</script>